import { assertEquals, assertExists, assertRejects } from 'std/testing/asserts.ts'
import { getStemmerByLocale } from '../core/getStemmerByLocale.mjs'
import EnglishStemmer from '../languages/english.mjs'
import SpanishStemmer from '../languages/spanish.mjs'
import type { Stemmer } from '../types.mjs'

function assertSameStem(stemmer: Stemmer, word1: string, word2: string) {
	assertEquals(stemmer.stemWord(word1), stemmer.stemWord(word2))
}

Deno.test('TS type checking', () => {
	const _tsCheck = () => {
		const stemmer = new EnglishStemmer()
		const _word: string = stemmer.stemWord('')
	}
})

Deno.test('English Stemmer', () => {
	const stemmer = new EnglishStemmer()

	assertSameStem(stemmer, 'locate', 'location')
})

Deno.test('Spanish Stemmer', () => {
	const stemmer = new SpanishStemmer()

	assertSameStem(stemmer, 'ubicar', 'ubicación')
})

Deno.test('getStemmerByLocale', async (t) => {
	await t.step('language-only locale returns correct stemmer', async () => {
		const locale = 'es'

		const stemmer = await getStemmerByLocale(locale)

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('fully-specified locale returns correct stemmer for its ase language', async () => {
		const locale = 'es-Latn-MX'

		const stemmer = await getStemmerByLocale(locale)

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('absent locale returns null', async () => {
		const locale = 'xx-XX'

		const stemmer = await getStemmerByLocale(locale)

		assertEquals(stemmer, null)
	})

	await t.step('invalid locale throws', () => {
		const locale = '!?*$'

		assertRejects(() => Promise.resolve(getStemmerByLocale(locale)))
	})

	await t.step('WIP locale returns null with default options', async () => {
		const locale = 'cs'
		const stemmer = await getStemmerByLocale(locale)

		assertEquals(stemmer, null)
	})

	await t.step('WIP locale returns WIP stemmer with `allowWip=true`', async () => {
		const locale = 'cs'
		const stemmer = await getStemmerByLocale(locale, { allowWip: true })

		assertExists(stemmer)
	})
})
