import { describe, expect, it } from 'bun:test'
import { join } from 'node:path'
import { getRootByPackageName } from '../src'

describe('node', () => {
	it('getRootByPackageName', () => {
		const packageName = '@heybrostudio/biome-config'
		const path = getRootByPackageName(packageName)
		expect(path).toEqual(join(process.cwd(), 'node_modules', packageName))
	})
})
