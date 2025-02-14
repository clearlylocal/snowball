// @ts-check

/** @typedef {{ stemWord(word: string): string }} Stemmer */
/** @typedef {{ new(): Stemmer }} StemmerConstructor */

const _stemmers = /** @type {const} */ ([
	['ar', () => import('../languages/arabic.mjs')],
	['ca', () => import('../languages/catalan.mjs')],
	['da', () => import('../languages/danish.mjs')],
	['de', () => import('../languages/german.mjs')],
	['el', () => import('../languages/greek.mjs')],
	['en', () => import('../languages/english.mjs')],
	['es', () => import('../languages/spanish.mjs')],
	['eu', () => import('../languages/basque.mjs')],
	['fi', () => import('../languages/finnish.mjs')],
	['fr', () => import('../languages/french.mjs')],
	['ga', () => import('../languages/irish.mjs')],
	['hi', () => import('../languages/hindi.mjs')],
	['hu', () => import('../languages/hungarian.mjs')],
	['hy', () => import('../languages/armenian.mjs')],
	['id', () => import('../languages/indonesian.mjs')],
	['it', () => import('../languages/italian.mjs')],
	['lt', () => import('../languages/lithuanian.mjs')],
	['ne', () => import('../languages/nepali.mjs')],
	['nl', () => import('../languages/dutch.mjs')],
	['no', () => import('../languages/norwegian.mjs')],
	['pt', () => import('../languages/portuguese.mjs')],
	['ro', () => import('../languages/romanian.mjs')],
	['ru', () => import('../languages/russian.mjs')],
	['sr', () => import('../languages/serbian.mjs')],
	['sv', () => import('../languages/swedish.mjs')],
	['ta', () => import('../languages/tamil.mjs')],
	['tr', () => import('../languages/turkish.mjs')],
	['yi', () => import('../languages/yiddish.mjs')],
])

const _wipStemmers = /** @type {const} */ ([
	['cs', () => import('../languages/czech.mjs')],
	['pl', () => import('../languages/polish.mjs')],
	['sk', () => import('../languages/slovak.mjs')],
	['uk', () => import('../languages/ukrainian.mjs')],
])

/** @typedef {typeof _stemmers[number][0]} StemmerLocale */
/** @typedef {typeof _wipStemmers[number][0]} WipStemmerLocale */

/** @type Map<string, () => Promise<{ default: StemmerConstructor }>> */
const stemmers = new Map(_stemmers)
/** @type Map<string, () => Promise<{ default: StemmerConstructor }>> */
const wipStemmers = new Map(_wipStemmers)

/**
 * @typedef {Object} Options
 *
 * @property {boolean} [allowWip] - Whether to allow work-in-progress stemmers or not.
 * If not, `null` is returned for any work-in-progress stemmers.
 * @default false
 */

/** @type {Options} */
const defaultOptions = {
	allowWip: false,
}

/**
 * @overload
 * @param {StemmerLocale} locale
 * @param {Partial<Options>} [options]
 * @return {Promise<StemmerConstructor>} `Stemmer` constructor
 */

/**
 * @overload
 * @param {StemmerLocale | WipStemmerLocale} locale
 * @param {Partial<Options> & { allowWip: true }} options
 * @returns {Promise<StemmerConstructor>} `Stemmer` constructor
 */

/**
 * @overload
 * @param {string | Intl.Locale} locale
 * @param {Partial<Options>} [options]
 * @returns {Promise<StemmerConstructor | null>} `Stemmer` constructor, or `null` if none available for that locale
 * @throws {TypeError} if an invalid locale is passed
 */

/**
 * Dynamically imports the stemmer class for a given locale and returns it.
 * If no stemmer class is available for that locale, returns `null` instead
 *
 * @param {string | Intl.Locale} locale
 * @param {Partial<Options>} [options]
 * @returns {Promise<StemmerConstructor | null>} `Stemmer` constructor, or `null` if none available for that locale
 */
export async function getStemmerByLocale(locale, options) {
	const { allowWip } = { ...defaultOptions, ...options }
	const { language } = new Intl.Locale(locale)

	const mod = stemmers.get(language) ?? (allowWip ? wipStemmers.get(language) : null)
	return mod ? (await mod()).default : null
}
