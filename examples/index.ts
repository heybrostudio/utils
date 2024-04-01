import { camelToUnderscore, cyan, generateDiscount, green, sleep } from '../src'

function divider() {
	console.log('----------------------------------------------')
}

function devConsole() {
	console.log(cyan('Hey Bro'))
	console.log(green('Hey Bro'))
	divider()
}

async function devPromise() {
	let value = 0
	await sleep(1000, () => {
		value += 1
	})
	console.log(value)
	divider()
}

function devString() {
	console.log(camelToUnderscore('testBar'))
	console.log(camelToUnderscore('testBarFoo'))

	console.log(generateDiscount())
	console.log(generateDiscount(10))
	console.log(generateDiscount(20))
	divider()
}

devConsole()
devPromise()
devString()

// Note: Writing tests directly is good debugging.
