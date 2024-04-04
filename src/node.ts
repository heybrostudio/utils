import { cwd } from 'node:process'

export function getRootByPackageName(packageName: string) {
	if (typeof window !== 'undefined' && typeof window.document !== 'undefined')
		throw Error('Only supported in the node runtime environment')

	return `${cwd()}/node_modules/${packageName}`
}
