import { cwd } from 'node:process'

/**
 * Get the package path of the specified dependency
 * @param packageName Package name
 * @returns Package path
 */
export function getRootByPackageName(packageName: string) {
	if (typeof window !== 'undefined' && typeof window.document !== 'undefined')
		throw Error('Only supported in the node runtime environment')

	return `${cwd()}/node_modules/${packageName}`
}
