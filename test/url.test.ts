import { describe, expect, it } from 'bun:test'
import { removeTracking } from '../src'

describe('url', () => {
	it('removeTracking', () => {
		const withTracking = {
			googleAnalytics: 'https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale',
			facebookPixel: 'https://example.com/page?fbclid=12345678901234567890123456789012',
			utm: 'https://example.com/page?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale',
			email: 'https://example.com/page?email_tracking_id=1234567890',
			socialMedia: 'https://example.com/page?utm_source=facebook&utm_medium=social&utm_campaign=summer_promotion',
			otherParameter:
				'https://example.com/page?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&page=1&sortBy=price',
			hash: 'https://example.com/page?utm_source=google&utm_medium=cpc#section-2',
		}
		const withoutTracking = {
			googleAnalytics: 'https://example.com/page',
			facebookPixel: 'https://example.com/page',
			utm: 'https://example.com/page',
			email: 'https://example.com/page',
			socialMedia: 'https://example.com/page',
			otherParameter: 'https://example.com/page?page=1&sortBy=price',
			hash: 'https://example.com/page#section-2',
		}

		for (const key in withTracking) {
			const cleanUrl = removeTracking(withTracking[key as keyof typeof withTracking])
			expect(cleanUrl).toEqual(withoutTracking[key as keyof typeof withTracking])
		}
	})
})
