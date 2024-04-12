<p align="center"></p>
<p align="center">
  <a href="https://github.com/heybrostudio/utils">
    <img alt="Opinionated collection of commonly used JavaScript/TypeScript utilities by @heybrostudio" src="https://raw.githubusercontent.com/heybrostudio/utils/main/.github/logo.svg" width="280">
  </a>
</p>
<p align="center">
  <samp>Opinionated collection of commonly used JavaScript/TypeScript utilities by <a href="https://github.com/heybrostudio">@heybrostudio</a></samp>
</p>

## Features

- Tree-shakable ESM
- Fully typed 

## Install

```bash
# npm
npm i @heybrostudio/utils@latest

# yarn
yarn add @heybrostudio/utils@latest

# pnpm 
pnpm add @heybrostudio/utils@latest

# bun
bun add @heybrostudio/utils@latest
```

## Usage

```ts
import { sleep } from '@heybrostudio/utils'

await sleep(1000, () => { console.log(`Hey bro, I'm awake.`) })
```

## Functions

### console

`green`

Print green text.

```ts
import { green } from '@heybrostudio/utils'

console.log(green('Hey Bro!'))
// output green text: 'Hey Bro!'
```

`cyan`

Print cyan text.

```ts
import { cyan } from '@heybrostudio/utils'

console.log(cyan('Hey Bro!'))
// output cyan text: 'Hey Bro!'
```

`red`

Print red text.

```ts
import { red } from '@heybrostudio/utils'

console.log(red('Hey Bro!'))
// output red text: 'Hey Bro!'
```

`gray`

Print red text.

```ts
import { gray } from '@heybrostudio/utils'

console.log(gray('Hey Bro!'))
// output gray text: 'Hey Bro!'
```

### promise

`sleep`

Promised `setTimeout`.

```ts
import { sleep } from '@heybrostudio/utils'

await sleep(1000)
console.log('After 1000 ms, the output')

// with callback
await sleep(1000, () => {
  console.log('After 1000 ms, the output')
})
```

### string

`camelToUnderscore`

Convert camel to underscore.

```ts
import { camelToUnderscore } from '@heybrostudio/utils'

console.log(camelToUnderscore('heyBroStudio'))
// output: 'hey_bro_studio'
```

`generateDiscount`

Generate a discount code.

```ts
import { generateDiscount } from '@heybrostudio/utils'

console.log(generateDiscount())
// output: A1NDU3MA

console.log(generateDiscount(10))
// output: MJA3NZM3MA

// Max 18 digits 
console.log(generateDiscount(20))
// output: MTCXMJKYMJEZMZMXOQ (length: 18)
```

### url

`removeTracking`

Remove tracking parameters from url.

```ts
import { removeTracking } from '@heybrostudio/utils'

const withTrackingUrl = 'https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale'

const cleanUrl = removeTracking(withTrackingUrl)
console.log(cleanUrl)
// output: https://example.com/page
```

### dom

`downloadXlsx`

Download of xlsx documents.

```ts
import { downloadXlsx } from '@heybrostudio/utils'

// xlsx data via fetch request 
fetch('path/to/your/example.xlsx', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  responseType: 'blob',
})
.then(response => response.blob())
.then(blob => {
  downloadXlsx(blob, 'HeyBroStudio')
}) 
.catch(error => console.error('Error:', error))
```

### node

> The following functions are only supported in node runtime environments.

`getRootByPackageName`

Get the package path of the specified dependency.

```ts
import { getRootByPackageName } from '@heybrostudio/utils'

const packageName = '@heybrostudio/biome-config'
const packagePath = getRootByPackageName(packageName)
console.log(packagePath)
// output: `${process.cwd()}/node_modules/@heybrostudio/biome-config`
```

### types

`Flatten`

Flatten type.

```ts
import type { Flatten } from '@heybrostudio/utils'

type test = {
	a: string
	b: number
	c: boolean,
	d: Record<string, any>
	e: Partial<{ f: string, g: string }>
}
type test2 = Pick<test, 'a'>
type test3 = Pick<test, 'b'>
type test4 = Omit<test, 'c'>

type test5 = test2 & test3 & test4
// Hovering over test5 shows:
// type test5 = test2 & test3 & test4

type flattenTest5 = Flatten<test5>
// Hovering over flattenTest5 shows:
/* 
type flattenTest5 = {
  a: string;
  b: number;
  d: {
    [x: string]: any;
  };
  e: {
    f?: string | undefined;
    g?: string | undefined;
  };
}
*/
```

`IsAny`

Check if it is of type `any`.

```ts
import type { IsAny } from '@heybrostudio/utils'

type test = IsAny<any> extends true ? 'YES' : 'NO'
// Hovering over test shows:
// type test = "YES"
```

`Func`

```ts
import type { Flatten } from '@heybrostudio/utils'

// Without parameters
type test1 = Func<void>
// Hovering over test shows:
// type test1 = () => void

// The parameter type is any
type test2 = Func<any>
// Hovering over test shows:
// type test2 = (param: any) => void

// Specify the type of parameter
type test3 = Func<number>
// Hovering over test shows:
// type test3 = (param: number) => void

// Specify the return value type
type test4 = Func<number, string>
// Hovering over test shows:
// type test4 = (param: number) => string
```

## Authors

- [@Caven](https://github.com/keyding)

## License
[MIT License](https://github.com/heybrostudio/utils/blob/main/LICENSE) © 2024-PRESENT Caven

This project was created using `bun init` in bun v1.1.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
