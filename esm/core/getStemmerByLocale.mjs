/** @typedef {import('../types.mjs').Stemmer} Stemmer */
/** @typedef {import('../types.mjs').StemmerConstructor} StemmerConstructor */

/** @type {Partial<Record<string, (allowWip: boolean) => Promise<StemmerConstructor | null>>>} */
const stemmersByLanguage = {
	'ro': async () => (await (import('../languages/romanian.mjs'))).default,
	'fr': async () => (await (import('../languages/french.mjs'))).default,
	'ga': async () => (await (import('../languages/irish.mjs'))).default,
	'pt': async () => (await (import('../languages/portuguese.mjs'))).default,
	'no': async () => (await (import('../languages/norwegian.mjs'))).default,
	'tr': async () => (await (import('../languages/turkish.mjs'))).default,
	'it': async () => (await (import('../languages/italian.mjs'))).default,
	'fi': async () => (await (import('../languages/finnish.mjs'))).default,
	'id': async () => (await (import('../languages/indonesian.mjs'))).default,
	'sr': async () => (await (import('../languages/serbian.mjs'))).default,
	'hy': async () => (await (import('../languages/armenian.mjs'))).default,
	'hu': async () => (await (import('../languages/hungarian.mjs'))).default,
	'ta': async () => (await (import('../languages/tamil.mjs'))).default,
	'ne': async () => (await (import('../languages/nepali.mjs'))).default,
	'hi': async () => (await (import('../languages/hindi.mjs'))).default,
	'uk': async (a) => a ? (await (import('../languages/ukrainian.mjs'))).default : null,
	'sk': async (a) => a ? (await (import('../languages/slovak.mjs'))).default : null,
	'eu': async () => (await (import('../languages/basque.mjs'))).default,
	'yi': async () => (await (import('../languages/yiddish.mjs'))).default,
	'pl': async (a) => a ? (await (import('../languages/polish.mjs'))).default : null,
	'sv': async () => (await (import('../languages/swedish.mjs'))).default,
	'en': async () => (await (import('../languages/english.mjs'))).default,
	'ar': async () => (await (import('../languages/arabic.mjs'))).default,
	'da': async () => (await (import('../languages/danish.mjs'))).default,
	'ru': async () => (await (import('../languages/russian.mjs'))).default,
	'ca': async () => (await (import('../languages/catalan.mjs'))).default,
	'es': async () => (await (import('../languages/spanish.mjs'))).default,
	'cs': async (a) => a ? (await (import('../languages/czech.mjs'))).default : null,
	'nl': async () => (await (import('../languages/dutch.mjs'))).default,
	'lt': async () => (await (import('../languages/lithuanian.mjs'))).default,
	'de': async () => (await (import('../languages/german.mjs'))).default,
	'el': async () => (await (import('../languages/greek.mjs'))).default,
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
