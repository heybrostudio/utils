import { describe, expect, it } from 'bun:test'
import { camelToUnderscore, generateDiscount } from '../src/string'

describe('string', () => {
	it('camelToUnderscore', () => {
		expect(camelToUnderscore('Test')).toEqual('_test')
		expect(camelToUnderscore('Test_foo')).toEqual('_test_foo')
		expect(camelToUnderscore('testBar')).toEqual('test_bar')
		expect(camelToUnderscore('TestBar')).toEqual('_test_bar')
	})

	it('generateDiscount', () => {
		expect(generateDiscount().length).toEqual(8)

		const givenLength = 10
		const givenLengthDiscount = generateDiscount(givenLength)
		expect(givenLengthDiscount.length).toEqual(givenLength)

		const maxLength = 18
		const maxLengthDiscount = generateDiscount(maxLength)
		expect(maxLengthDiscount.length).toEqual(maxLength)

		const greaterThanMaxLength = 20
		const greaterThanMaxLengthDiscount = generateDiscount(greaterThanMaxLength)
		expect(greaterThanMaxLengthDiscount.length).toEqual(maxLength)
	})
})
