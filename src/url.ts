/**
 * Remove tracking parameters from url
 *
 * @param url The url with tracking parameters
 * @returns The url after removing the tracking parameter
 */
export function removeTracking(url: string) {
	// Remove the hash part of the URL
	const [baseUrl, hash] = url.split('#')
	// Remove the query parameter part of the URL
	const [baseWithoutParams, params] = baseUrl.split('?')

	// List of common tracking parameters
	const trackingParams = [
		'utm_source',
		'utm_medium',
		'utm_campaign',
		'utm_term',
		'utm_content',
		'gclid',
		'fbclid',
		'pk_campaign',
		'pk_kwd',
		'msclkid',
		'mc_cid',
		'mc_eid',
		'yclid',
		'dclid',
		'gclsrc',
		'msnclid',
		'msclkid',
		'cid',
		'trk',
		'cm_mmc',
		'cm_mmca',
		'cm_mmcb',
		'cm_lm',
		'sc_cid',
		'sc_ven',
		'sc_src',
		'sc_campaign',
		'sc_medium',
		'sc_cmp',
		'sc_content',
		'sc_kw',
		'sc_geo',
		'sc_device',
		'sc_placement',
		'utm_source',
		'utm_medium',
		'utm_campaign',
		'utm_content',
		'utm_term',
		'gclid',
		'dclid',
		'gclsrc',
		'fbclid',
		'msclkid',
		'yclid',
		'msnclid',
		'utm_id',
		'ga_cid',
		'utmclid',
		'vclid',
		'_openstat',
		'cm_mmc',
		'cm_mmca',
		'cm_mmcb',
		'cm_lm',
		'ncid',
		'openstat',
		'affiliate',
		'affiliate_id',
		'aff_id',
		'aff',
		'tid',
		'ct',
		'sourceid',
		'utm_source',
		'utm_medium',
		'utm_campaign',
		'utm_content',
		'utm_term',
		'gclid',
		'gclsrc',
		'dclid',
		'fbclid',
		'msclkid',
		'p_click',
		'urlid',
		'mkt_tok',
		's_cid',
		'piwik_campaign',
		'piwik_kwd',
		'piwik_medium',
		'piwik_source',
		'piwik_term',
		'ito',
		'__hstc',
		'__hssc',
		'__hssrc',
		'clid',
		'msclkid',
		'irgwc',
		'mc',
		'mclid',
		'mctag',
		'utmccn',
		'utmcid',
		'utmcmd',
		'utmctr',
		'utmgclid',
		'utmdt',
		'utme',
		'utmfl',
		'utmhid',
		'utmipc',
		'utmipn',
		'utmipr',
		'utmiva',
		'utmje',
		'utmju',
		'utmjv',
		'utmjw',
		'utmk',
		'utmls',
		'utmmi',
		'utmn',
		'utmp',
		'utmsa',
		'utmsc',
		'utmsr',
		'utmt',
		'utmtid',
		'utmtr',
		'utmtto',
		'utmuid',
		'utmv',
		'utmx',
		'utmz',
		'lr_referrer',
		'lr_aid',
		'lr_cust',
		'lr_ekw',
		'lr_medium',
		'lr_mid',
		'lr_source',
		'lr_term',
		'lr_url',
		'email_tracking_id',
	]

	// Partial splitting of query parameters into an array of key-value pairs
	const cleanParams = params.split('&').reduce((acc: string[], param) => {
		const [key] = param.split('=')
		// console.log(key)

		if (!trackingParams.includes(key)) {
			acc.push(param)
		}
		return acc
	}, [])

	// Refactoring URL
	const cleanedUrl = cleanParams.length > 0 ? `${baseWithoutParams}?${cleanParams.join('&')}` : baseWithoutParams
	return hash ? `${cleanedUrl}#${hash}` : cleanedUrl
}
