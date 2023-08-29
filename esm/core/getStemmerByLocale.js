/** @type {Partial<Record<string, (allowWip: boolean) => Promise<StemmerConstructor | null>>>} */
const stemmersByLanguage = {
	'ro': async () => (await (import('../languages/romanian.js'))).default,
	'fr': async () => (await (import('../languages/french.js'))).default,
	'ga': async () => (await (import('../languages/irish.js'))).default,
	'pt': async () => (await (import('../languages/portuguese.js'))).default,
	'no': async () => (await (import('../languages/norwegian.js'))).default,
	'tr': async () => (await (import('../languages/turkish.js'))).default,
	'it': async () => (await (import('../languages/italian.js'))).default,
	'fi': async () => (await (import('../languages/finnish.js'))).default,
	'id': async () => (await (import('../languages/indonesian.js'))).default,
	'sr': async () => (await (import('../languages/serbian.js'))).default,
	'hy': async () => (await (import('../languages/armenian.js'))).default,
	'hu': async () => (await (import('../languages/hungarian.js'))).default,
	'ta': async () => (await (import('../languages/tamil.js'))).default,
	'ne': async () => (await (import('../languages/nepali.js'))).default,
	'hi': async () => (await (import('../languages/hindi.js'))).default,
	'uk': async (a) => a ? (await (import('../languages/ukrainian.js'))).default : null,
	'sk': async (a) => a ? (await (import('../languages/slovak.js'))).default : null,
	'eu': async () => (await (import('../languages/basque.js'))).default,
	'yi': async () => (await (import('../languages/yiddish.js'))).default,
	'pl': async (a) => a ? (await (import('../languages/polish.js'))).default : null,
	'sv': async () => (await (import('../languages/swedish.js'))).default,
	'en': async () => (await (import('../languages/english.js'))).default,
	'ar': async () => (await (import('../languages/arabic.js'))).default,
	'da': async () => (await (import('../languages/danish.js'))).default,
	'ru': async () => (await (import('../languages/russian.js'))).default,
	'ca': async () => (await (import('../languages/catalan.js'))).default,
	'es': async () => (await (import('../languages/spanish.js'))).default,
	'cs': async (a) => a ? (await (import('../languages/czech.js'))).default : null,
	'nl': async () => (await (import('../languages/dutch.js'))).default,
	'lt': async () => (await (import('../languages/lithuanian.js'))).default,
	'de': async () => (await (import('../languages/german.js'))).default,
	'el': async () => (await (import('../languages/greek.js'))).default,
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
