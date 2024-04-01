import { describe, expect, it } from 'bun:test'
import { sleep } from '../src/promise'

describe('promise', () => {
	it('sleep', async () => {
		const ms = 10
		const startTime = Date.now()

		let initValue = 0
		await sleep(ms, () => {
			initValue += 1
		})

		expect(Date.now() - startTime).toBeGreaterThanOrEqual(ms)
		expect(initValue).toEqual(1)
	})
})
