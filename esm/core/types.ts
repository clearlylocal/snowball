export interface Stemmer {
	stemWord(word: string): string
}

export interface StemmerConstructor {
	new (): Stemmer
}
