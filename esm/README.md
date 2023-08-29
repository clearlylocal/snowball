# Snowball ESM (JavaScript, Typescript)

ESM-compatible ([EcmaScript modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)) build of Snowball, with TypeScript-compatible types provided by JSDoc. For use in modern JavaScript and TypeScript apps on the Web, Deno, or Nodejs.

## Compile

```sh
deno task compile
```

## Test

```sh
deno task test
```

## Import in your code

Import and instantiate a stemmer for an individual language:

```js
import EnglishStemmer from 'snowball/esm/languages/english.js'

const stemmer = new EnglishStemmer()
stemmer.stemWord('location') // locat
```

Import a singleton stemmer for a language using its ISO code:

```js
import { getStemmerByLocale } from 'snowball/esm/core/getStemmerByLocale.js'

const locale = 'es' // Spanish
const stemmer = await getStemmerByLocale(locale)

stemmer.stemWord('ubicación') // ubic
```
