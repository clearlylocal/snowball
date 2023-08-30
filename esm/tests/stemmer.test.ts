import { assertEquals, assertExists, assertRejects } from 'std/testing/asserts.ts'
import { getStemmerByLocale } from '../core/getStemmerByLocale.mjs'
import EnglishStemmer from '../languages/english.mjs'
import SpanishStemmer from '../languages/spanish.mjs'

type Stemmer = { stemWord(word: string): string }

function assertSameStem(stemmer: Stemmer, word1: string, word2: string) {
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

		const _en1: Stemmer = await getStemmerByLocale('en')
		const _en2: Stemmer = await getStemmerByLocale('en', { allowWip: true })
		const _en3: Stemmer = await getStemmerByLocale('en', { allowWip: false })

		const _allowedWip: Stemmer = await getStemmerByLocale('cs', { allowWip: true })

		const dynamicStr = String('')
		const localeObj = new Intl.Locale('')

		const _dynamic1: Stemmer | null = await getStemmerByLocale(dynamicStr)
		const _dynamic2: Stemmer | null = await getStemmerByLocale(dynamicStr, { allowWip: true })
		const _dynamic3: Stemmer | null = await getStemmerByLocale(dynamicStr, { allowWip: false })

		const _dynamicWithObj1: Stemmer | null = await getStemmerByLocale(localeObj)
		const _dynamicWithObj2: Stemmer | null = await getStemmerByLocale(localeObj, { allowWip: true })
		const _dynamicWithObj3: Stemmer | null = await getStemmerByLocale(localeObj, { allowWip: false })

		// ⚠️ expected errors below

		// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'never'.
		const _disallowedWip = await getStemmerByLocale('cs', { allowWip: false })
		// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'never'.
		const _defaultDisallowedWip = await getStemmerByLocale('cs')

		// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'never'.
		const _noexist1: null = await getStemmerByLocale('xx', { allowWip: true })
		// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'never'.
		const _noexist2: null = await getStemmerByLocale('xx', { allowWip: false })
		// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'never'.
		const _noexist3: null = await getStemmerByLocale('xx')

		// @ts-expect-error might be null
		const _dynamic4: Stemmer = await getStemmerByLocale(dynamicStr)
		// @ts-expect-error might be null
		const _dynamic5: Stemmer = await getStemmerByLocale(dynamicStr, { allowWip: true })
		// @ts-expect-error might be null
		const _dynamic6: Stemmer = await getStemmerByLocale(dynamicStr, { allowWip: false })

		// @ts-expect-error might not be null
		const _dynamic7: null = await getStemmerByLocale(dynamicStr)
		// @ts-expect-error might not be null
		const _dynamic8: null = await getStemmerByLocale(dynamicStr, { allowWip: true })
		// @ts-expect-error might not be null
		const _dynamic9: null = await getStemmerByLocale(dynamicStr, { allowWip: false })
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
		const locale = String('es-Latn-MX')

		const stemmer = await getStemmerByLocale(locale)

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('fully-specified `Intl.Locale` obj returns correct stemmer for its ase language', async () => {
		const locale = new Intl.Locale('es-Latn-MX')

		const stemmer = await getStemmerByLocale(locale)

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('absent locale returns null', async () => {
		const locale = String('xx-XX')

		const stemmer = await getStemmerByLocale(locale)

		assertEquals(stemmer, null)
	})

	await t.step('invalid locale throws', () => {
		const locale = String('!?*$')

		assertRejects(() => Promise.resolve(getStemmerByLocale(locale)))
	})

	await t.step('WIP locale returns null with default options', async () => {
		const locale = String('cs')
		const stemmer = await getStemmerByLocale(locale)

		assertEquals(stemmer, null)
	})

	await t.step('WIP locale returns WIP stemmer with `allowWip=true`', async () => {
		const locale = 'cs'
		const stemmer = await getStemmerByLocale(locale, { allowWip: true })

		assertExists(stemmer)
	})
})
