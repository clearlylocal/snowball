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

const filePaths: Record<string, { path: string; isWip?: boolean }> = {}

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

		const ctorName = tempFilePath.split('/').at(-1)!.slice(0, -jsExt.length)

		if (!content.trim()) throw new Error(`No content for ${languageName}`)

		await writeTextFile(
			outFilePath,
			`// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'
${
				content.replace(
					`${ctorName} = function`,
					`/** @type {StemmerConstructor} */
export default (function ${languageName.charAt(0).toUpperCase() + languageName.slice(1)}Stemmer`,
				)
					.replace(/(;)?(\s*)$/, ')$1$2')
			}`,
		)

		await Deno.remove(tempFilePath)
	}
}

const stemmersByLanguage = `{
${
	Object.entries(filePaths).map(([code, { path, isWip }]) => {
		const defaultImport = `(await (import(${JSON.stringify(join('..', relative('./esm', path)))}))).default`

		return isWip
			? `\t${JSON.stringify(code)}: async (a) => a ? ${defaultImport} : null,`
			: `\t${JSON.stringify(code)}: async () => ${defaultImport},`
	}).join('\n')
}
}`

const getStemmerByLocale = String
	.raw`/** @type {Partial<Record<string, (allowWip: boolean) => Promise<StemmerConstructor | null>>>} */
const stemmersByLanguage = ${stemmersByLanguage}

/** @type {Map<string, Stemmer | null>} */
const cache = new Map()

/**
 * @typedef {Object} Options
 *
 * @property {boolean} allowWip - Whether to allow work-in-progress stemmers or not.
 * If not, ${'`null`'} is returned for any work-in-progress stemmers.
 * @default false
 */

/** @type {Options} */
const defaultOptions = {
	allowWip: false,
}

/**
 * @param {string | Intl.Locale} locale
 * @param {Partial<Options>} [options]
 *
 * @throws {TypeError} if an invalid locale is passed
 *
 * @returns {Promise<Stemmer | null>} Singleton instance of ${'`Stemmer`'} if exists for that locale, else ${'`null`'}
 */
export async function getStemmerByLocale(locale, options) {
	const { allowWip } = { ...defaultOptions, ...options }
	const { language } = new Intl.Locale(locale)
	const cacheKey = ${'`${language}::${allowWip}`'}

	if (!cache.has(cacheKey)) {
		const Ctor = await stemmersByLanguage[language]?.(allowWip)

		cache.set(cacheKey, Ctor ? new Ctor() : null)
	}

	return cache.get(cacheKey) ?? null
}
`

await writeTextFile('./esm/core/getStemmerByLocale.mjs', getStemmerByLocale)

await new Deno.Command('deno', {
	args: ['fmt', './esm'],
}).output()
