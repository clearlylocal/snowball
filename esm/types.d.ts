declare type Stemmer = {
	stemWord(word: string): string
}

declare type StemmerConstructor = {
	new (): Stemmer
}
