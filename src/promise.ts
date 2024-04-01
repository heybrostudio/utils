import type { Func } from './types'

/**
 * Promised `setTimeout`
 *
 * @param ms milliseconds
 * @param callback callback method
 * @returns Promise
 */
export function sleep(ms: number, callback?: Func<any>) {
	return new Promise<void>((resolve) =>
		setTimeout(async () => {
			await callback?.()
			resolve()
		}, ms),
	)
}
