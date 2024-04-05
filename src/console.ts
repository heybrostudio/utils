/**
 * Print green text
 *
 * @param text Text you want to print
 * @returns Output green text
 */
export function green(text: string): string {
	return `\x1b[32m${text}\x1b[0m`
}

/**
 * Print cyan text
 *
 * @param text Text you want to print
 * @returns Output cyan text
 */
export function cyan(text: string): string {
	return `\x1b[36m${text}\x1b[0m`
}

/**
 * Print red text
 * @param text Text you want to print
 * @returns Output red text
 */
export function red(text: string): string {
	return `\x1b[31m${text}\x1b[0m`
}

/**
 * Print gray text
 * @param text Text you want to print
 * @returns Output gray text
 */
export function gray(text: string): string {
	return `\x1b[90m${text}\x1b[0m`
}
