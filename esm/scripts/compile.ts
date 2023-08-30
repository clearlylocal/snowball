import { join, relative } from 'std/path/mod.ts'
import { languageCodes } from './languageCodes.ts'

const sblExt = '.sbl'
const jsExt = '.js'

async function writeTextFile(path: string | URL, content: string) {
	await Deno.writeTextFile(path, content)

	console.log(`Wrote ${path}`)
}

try {
	await Deno.stat('./snowball')
} catch {
	await new Deno.Command('make').output()
}

const base = await Deno.readTextFile('./javascript/base-stemmer.js')

await writeTextFile(
	'./esm/core/base-stemmer.mjs',
	`// deno-lint-ignore-file
${base.replace('BaseStemmer = function', `export default function BaseStemmer`)}`,
)

const StemmerTypeDef = `/** @typedef {{ stemWord(word: string): string }} Stemmer */`

const filePaths: Record<string, { path: string; isWip?: boolean }> = {}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

for await (const x of Deno.readDir('./algorithms')) {
	if (x.isFile && x.name.endsWith(sblExt)) {
		const languageName = x.name.slice(0, -sblExt.length)

		const languageMeta: { isoCode: string | null; isWip?: boolean } | undefined =
			languageCodes[languageName as keyof typeof languageCodes]
		const outFilePath = `./esm/languages/${languageName}.mjs`

		if (languageMeta == null) {
			throw new Error(`No entry in languageCodes for language ${languageName}`)
		} else if (languageMeta?.isoCode != null) {
			filePaths[languageMeta.isoCode] = { path: outFilePath, isWip: languageMeta.isWip }
		}

		const tempFilePath = await Deno.makeTempFile({ prefix: 'Ctor', suffix: jsExt })

		await new Deno.Command('./snowball', {
			args: `./algorithms/${x.name} -js -o ${tempFilePath.slice(0, -jsExt.length)}`.split(' '),
		}).output()

		const content = await Deno.readTextFile(tempFilePath)

		const mangledClassName = capitalize(tempFilePath.split('/').at(-1)!.slice(0, -jsExt.length))

		if (!content.trim()) throw new Error(`No content for ${languageName}`)

		const outClassName = `${capitalize(languageName)}Stemmer`

		await writeTextFile(
			outFilePath,
			`${
				content.replace(
					new RegExp(String.raw`^(//.+)[\s\S]+?${mangledClassName} = function`),
					`$1
// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'

${StemmerTypeDef}

/** @type {{ new(): Stemmer }} */
const ${outClassName} = function`,
				)
					.replace(/$/, `\nexport default ${outClassName}\n`)
			}`,
		)

		await Deno.remove(tempFilePath)
	}
}

const allImports = Object.entries(filePaths).sort(([a], [b]) => a.localeCompare(b))

const toStemmerImportMap = (imports: typeof allImports) => {
	return imports.map((x) =>
		`[${JSON.stringify(x[0])}, () => import(${JSON.stringify(join('..', relative('./esm', x[1].path)))})],`
	).join('\n')
}

const stemmers = toStemmerImportMap(allImports.filter((x) => !x[1].isWip))
const wip_stemmers = toStemmerImportMap(allImports.filter((x) => x[1].isWip))

const templateReplacements = {
	stemmers,
	wip_stemmers,
}

const getStemmerByLocale = (await Deno.readTextFile('./esm/scripts/getStemmerByLocale.template.mjs'))
	.replaceAll(
		new RegExp(String.raw`//\s*<(${Object.keys(templateReplacements).join('|')})>[\s\S]+?//\s*</\1>`, 'g'),
		(_, p1) => templateReplacements[p1 as keyof typeof templateReplacements],
	)

// 		const defaultImport = `(await (import(${JSON.stringify(join('..', relative('./esm', path)))}))).default`

await writeTextFile('./esm/core/getStemmerByLocale.mjs', getStemmerByLocale)

await new Deno.Command('deno', {
	args: ['fmt', './esm'],
}).output()
