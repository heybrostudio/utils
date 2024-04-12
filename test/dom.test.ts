/// <reference lib="dom" />

import { describe, expect, it } from 'bun:test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { downloadXlsx } from '../src'

describe('dom', () => {
	it('downloadXlsx', async () => {
		const buffer = readFileSync(join(`${import.meta.dir}`, 'Name.xlsx'))
		downloadXlsx(buffer, 'download.dom')
	})
})
