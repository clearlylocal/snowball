import { assertEquals, assertExists, assertRejects } from 'std/testing/asserts.ts'
import { getStemmerByLocale } from '../core/getStemmerByLocale.mjs'
import EnglishStemmer from '../languages/english.mjs'
import SpanishStemmer from '../languages/spanish.mjs'

function assertSameStem(stemmer: { stemWord(word: string): string }, word1: string, word2: string) {
	assertEquals(stemmer.stemWord(word1), stemmer.stemWord(word2))
}

Deno.test('TS type checking', () => {
	const _tsCheck = async () => {
		for (const stemmer of [new EnglishStemmer(), (await getStemmerByLocale('en'))!]) {
			type Params = Parameters<typeof stemmer.stemWord>
			type Return = ReturnType<typeof stemmer.stemWord>
			type NullishNumber = null | undefined | number
			// type checking will fail if `Params` length > 1 or is a type that doesn't include `[string]`
			const _paramIncludesString: [string] = [''] as Params
			// type checking will fail if `Params[0]` is `any` or is nullable
			const _paramExcludesNonString: Exclude<[NullishNumber | string], Params> = [1] as [NullishNumber]
			// type checking will fail if `Return` is a type that doesn't include `string`
			const _returnIncludesString: string = '' as Return
			// type checking will fail if `Return` is `any` or is nullable
			const _returnExcludesNonString: Exclude<NullishNumber | string, Return> = 1 as NullishNumber
		}
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
