/** @typedef {{ stemWord(word: string): string }} Stemmer */

/** @type {Partial<Record<string, (allowWip: boolean) => Promise<{ new(): Stemmer } | null>>>} */
const stemmersByLanguage = {
	'ar': async () => (await (import('../languages/arabic.mjs'))).default,
	'ca': async () => (await (import('../languages/catalan.mjs'))).default,
	'cs': async (a) => a ? (await (import('../languages/czech.mjs'))).default : null,
	'da': async () => (await (import('../languages/danish.mjs'))).default,
	'de': async () => (await (import('../languages/german.mjs'))).default,
	'el': async () => (await (import('../languages/greek.mjs'))).default,
	'en': async () => (await (import('../languages/english.mjs'))).default,
	'es': async () => (await (import('../languages/spanish.mjs'))).default,
	'eu': async () => (await (import('../languages/basque.mjs'))).default,
	'fi': async () => (await (import('../languages/finnish.mjs'))).default,
	'fr': async () => (await (import('../languages/french.mjs'))).default,
	'ga': async () => (await (import('../languages/irish.mjs'))).default,
	'hi': async () => (await (import('../languages/hindi.mjs'))).default,
	'hu': async () => (await (import('../languages/hungarian.mjs'))).default,
	'hy': async () => (await (import('../languages/armenian.mjs'))).default,
	'id': async () => (await (import('../languages/indonesian.mjs'))).default,
	'it': async () => (await (import('../languages/italian.mjs'))).default,
	'lt': async () => (await (import('../languages/lithuanian.mjs'))).default,
	'ne': async () => (await (import('../languages/nepali.mjs'))).default,
	'nl': async () => (await (import('../languages/dutch.mjs'))).default,
	'no': async () => (await (import('../languages/norwegian.mjs'))).default,
	'pl': async (a) => a ? (await (import('../languages/polish.mjs'))).default : null,
	'pt': async () => (await (import('../languages/portuguese.mjs'))).default,
	'ro': async () => (await (import('../languages/romanian.mjs'))).default,
	'ru': async () => (await (import('../languages/russian.mjs'))).default,
	'sk': async (a) => a ? (await (import('../languages/slovak.mjs'))).default : null,
	'sr': async () => (await (import('../languages/serbian.mjs'))).default,
	'sv': async () => (await (import('../languages/swedish.mjs'))).default,
	'ta': async () => (await (import('../languages/tamil.mjs'))).default,
	'tr': async () => (await (import('../languages/turkish.mjs'))).default,
	'uk': async (a) => a ? (await (import('../languages/ukrainian.mjs'))).default : null,
	'yi': async () => (await (import('../languages/yiddish.mjs'))).default,
}

/** @type {Map<string, Stemmer | null>} */
const cache = new Map()

/**
 * @typedef {Object} Options
 *
 * @property {boolean} allowWip - Whether to allow work-in-progress stemmers or not.
 * If not, `null` is returned for any work-in-progress stemmers.
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
 * @returns {Promise<Stemmer | null>} Singleton instance of `Stemmer` if exists for that locale, else `null`
 */
export async function getStemmerByLocale(locale, options) {
	const { allowWip } = { ...defaultOptions, ...options }
	const { language } = new Intl.Locale(locale)
	const cacheKey = `${language}::${allowWip}`

	if (!cache.has(cacheKey)) {
		const Ctor = await stemmersByLanguage[language]?.(allowWip)

		cache.set(cacheKey, Ctor ? new Ctor() : null)
	}

	return cache.get(cacheKey) ?? null
}
