import type { Func, MayBePromise } from './types'

/**
 * Promised `setTimeout`
 *
 * @param ms milliseconds
 * @param callback callback method
 * @returns Promise
 */
export function sleep(ms: number, callback?: Func<void, MayBePromise<void>>) {
	return new Promise<void>((resolve) =>
		setTimeout(async () => {
			await callback?.()
			resolve()
		}, ms),
	)
}
