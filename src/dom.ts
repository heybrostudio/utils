/**
 * Download of xlsx documents
 * @param value BlobPart value
 * @param filename File name
 */
export function downloadXlsx(value: BlobPart, filename: string) {
	const link = document.createElement('a')
	const blob = new Blob([value], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
	link.style.display = 'none'
	link.href = URL.createObjectURL(blob)
	link.download = filename
	// Fixed not being able to start downloads in Firefox
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}
