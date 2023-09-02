import { join, relative } from 'std/path/mod.ts'
import { assertEquals } from 'std/assert/mod.ts'
import { green, yellow } from 'std/fmt/colors.ts'

const lines = (await Deno.readTextFile('./libstemmer/modules.txt')).split('\n').map((x) => x.trim()).filter((x) =>
	x && !x.startsWith('#')
).map((x) => x.split(/\s+/))

function chooseCanonicalLocale(locales: string[]) {
	for (const locale of locales) {
		try {
			if (
				locale === new Intl.Locale(locale).toString() &&
				locale !== new Intl.DisplayNames('en', { type: 'language' }).of(new Intl.Locale(locale).toString())
			) {
				return locale
			}
		} catch { /* ignore errors */ }
	}

	return null
}

const languageCodes = Object.fromEntries(lines
	.map(([langName, _, locales, isWip]) => {
		const isoCode = chooseCanonicalLocale(locales.split(','))

		return [langName, { isoCode, isWip: isWip === '[WIP]' }]
	}))

const sblExt = '.sbl'
const jsExt = '.js'

const written: string[] = []
const skipped: string[] = []

async function writeTextFile(path: string | URL, content: string) {
	await Deno.writeTextFile(path, content)

	written.push(String(path))
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
		const className = `${capitalize(languageName)}Stemmer`

		const languageMeta: { isoCode: string | null; isWip?: boolean } | undefined =
			languageCodes[languageName as keyof typeof languageCodes]

		if (!languageMeta?.isoCode) {
			skipped.push(x.name)
			continue
		}

		const outFilePath = `./esm/languages/${languageName}.mjs`

		assertEquals(
			languageMeta.isoCode,
			new Intl.Locale(languageMeta.isoCode).toString(),
			`ISO code ${languageMeta.isoCode} is not normalized`,
		)

		filePaths[languageMeta.isoCode] = { path: outFilePath, isWip: languageMeta.isWip }

		const tempFilePath = await Deno.makeTempFile({ prefix: 'Ctor', suffix: jsExt })

		await new Deno.Command('./snowball', {
			args: [
				`./algorithms/${x.name}`,
				'-js',
				'-utf8',
				...['-o', `${tempFilePath.slice(0, -jsExt.length)}`],
				...['-n', className],
			],
		}).output()

		const content = await Deno.readTextFile(tempFilePath)

		if (!content.trim()) throw new Error(`No content for ${languageName}`)

		await writeTextFile(
			outFilePath,
			`${
				content.replace(
					new RegExp(String.raw`^(//.+)[\s\S]+?${className} = function`),
					`$1
				// deno-lint-ignore-file
				import BaseStemmer from '../core/base-stemmer.mjs';

				${StemmerTypeDef}

				/** @type {{ new(): Stemmer }} */
				const ${className} = function`,
				)
					.replace(/$/, `\nexport default ${className};\n`)
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

await writeTextFile('./esm/core/getStemmerByLocale.mjs', getStemmerByLocale)

await new Deno.Command('deno', {
	args: ['fmt', './esm'],
}).output()

function langNameFromPath(path: string) {
	return path.split('/').at(-1)!.split('.').at(0)!
}

console.info(`✅ Wrote ${written.map((path) => green(path)).join(', ')}`)
console.info(`⚠️  Skipped ${skipped.map((path) => yellow(langNameFromPath(path))).join(', ')}`)
