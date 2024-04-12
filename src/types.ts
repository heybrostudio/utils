/**
 * Flatten type
 */
export type Flatten<T> = {
	[K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K]
} & {}

/**
 * Type `T` or a promise that resolves to type `T`
 */
export type MayBePromise<T> = T | Promise<T>

/**
 * Check if it is of type `any`
 *
 * @see
 * The source code for this type was inspired by vueuse's `IsAny` type util
 * https://github.com/vueuse/vueuse/blob/1558cd2b5b019abc1feda6d702caa1053a182903/packages/shared/utils/types.ts#L155C4-L155C60
 */
export type IsAny<T> = 0 extends 1 & T ? true : false

/**
 * Function types that specify parameter and return value types.
 * The default return value type is `void`.
 */

export type Func<T, R = void> = IsAny<T> extends true
	? (param: any) => R
	: [T] extends [void]
		? () => R
		: (param: T) => R
