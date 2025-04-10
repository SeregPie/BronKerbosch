export function createInstance({
	//
	locale = '',
	translations = {},
	formatters = {},
	extras = {},
} = {}) {
	let flatTranslations = translations;
	let instance = {
		locale,
		extras,
		t: (id, values) => {
			const fn = flatTranslations[id];
			if (fn != null) {
				return fn(instance, values);
			}
			return '';
		},
		format: (id, options) => {
			const fn = formatters[id];
			if (fn != null) {
				return fn(instance, options);
			}
			return '';
		},
		clone: (options) => {},
	};
}
