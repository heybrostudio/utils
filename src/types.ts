/**
 * Function type
 */
export type Func<T = void> = () => T

/**
 * Flatten type
 */
export type Flatten<T> = {
	[K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K]
} & {}
