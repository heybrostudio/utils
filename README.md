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

## Authors

- [@Caven](https://github.com/keyding)

## License
[MIT License](https://github.com/heybrostudio/utils/blob/main/LICENSE) © 2024-PRESENT Caven

This project was created using `bun init` in bun v1.0.36. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
