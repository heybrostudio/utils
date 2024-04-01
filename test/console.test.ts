import { describe, expect, it } from 'bun:test'

import { cyan, green } from '../src/console'

describe('console', () => {
	it('green', () => {
		const text = 'green text'
		expect(green(text)).toEqual(`\x1b[32m${text}\x1b[0m`)
	})

	it('cyan', () => {
		const text = 'cyan text'
		expect(cyan(text)).toEqual(`\x1b[36m${text}\x1b[0m`)
	})
})
