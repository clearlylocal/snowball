/** @typedef {{ stemWord(word: string): string }} Stemmer */

const _stemmers = /** @type {const} */ ([
	// <stemmers>
	['en', () => import('../languages/english.mjs')],
	// </stemmers>
])

const _wipStemmers = /** @type {const} */ ([
	// <wip_stemmers>
	['xx', () => import('../languages/english.mjs')],
	// </wip_stemmers>
])

const stemmers = new Map(_stemmers)
const wipStemmers = new Map(_wipStemmers)

/** @type {Map<string, Stemmer | null>} */
const cache = new Map()

/**
 * @template {boolean | undefined} [AllowWip=false]
 *
 * @typedef {Object} Options
 *
 * @property {AllowWip} allowWip - Whether to allow work-in-progress stemmers or not.
 * If not, `null` is returned for any work-in-progress stemmers.
 * @default false
 */

/**
 * @template {boolean | undefined} AllowWip
 * @type {Options}
 */
const defaultOptions = {
	allowWip: false,
}

/**
 * @template {string | Intl.Locale} Locale
 * @template {boolean | undefined} [AllowWip=undefined]
 *
 * @param {string extends Locale
 * 	? Locale
 * 	: Locale extends typeof _stemmers[number][0]
 * 	? Locale
 * 	: Locale extends typeof _wipStemmers[number][0]
 * 	? AllowWip extends true
 * 	? Locale
 * 	: never
 * 	? Intl.Locale extends Locale
 * 	? Locale
 * 	: never
 * } locale
 * @param {Partial<Options<AllowWip>>} [options]
 *
 * @throws {TypeError} if an invalid locale is passed
 *
 * @returns {Promise<string extends Locale
 * 	? (Stemmer | null)
 * 	: Locale extends typeof _stemmers[number][0]
 * 	? Stemmer
 * 	: Locale extends typeof _wipStemmers[number][0]
 * 	? AllowWip extends true
 * 	? Stemmer
 * 	: null
 * 	? Intl.Locale extends Locale
 * 	? (Stemmer | null)
 * 	: null
 * >} Singleton instance of `Stemmer` if exists for that locale, else `null`
 */
export async function getStemmerByLocale(locale, options) {
	const { allowWip } = { ...defaultOptions, ...options }
	const { language } = new Intl.Locale(locale)
	const cacheKey = `${language}::${allowWip}`

	if (!cache.has(cacheKey)) {
		const mod = stemmers.get(language) ?? (allowWip ? wipStemmers.get(language) : null)
		const instance = mod ? new (await mod()).default() : null

		cache.set(cacheKey, instance)
	}

	return cache.get(cacheKey) ?? null
}
