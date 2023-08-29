declare interface Stemmer {
	stemWord(word: string): string
}

declare interface StemmerConstructor {
	new (): Stemmer
}
