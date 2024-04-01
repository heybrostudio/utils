/**
 * Camel to underscore
 * @param key The string to be converted
 * @returns The string linked by underscores
 */
export function camelToUnderscore(key: string) {
	return key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
}

/**
 * Generate a discount code
 *
 * @param length Specify the number of characters, default 8, max 18
 * @returns A string of the specified number of characters consisting of uppercase letters and numbers.
 */
export function generateDiscount(length = 8) {
	const end = -2
	const start = end - Math.max(0, length)

	return btoa(Date.now().toString()).slice(start, end).toUpperCase()
}
