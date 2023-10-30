export const Set_prototype_union = (that, other) => {
	const result = new Set(that);
	for (const value of other) {
		result.add(value);
	}
	return result;
};

export const Set_prototype_intersection = (that, other) => {
	const result = new Set();
	for (const value of other) {
		if (that.has(value)) {
			result.add(value);
		}
	}
	return result;
};

export const Set_prototype_difference = (that, other) => {
	const result = new Set(that);
	for (const value of other) {
		result.delete(value);
	}
	return result;
};

export const Comparator_patvuhfg = (patvuhfg) => {
	return (a, b) => patvuhfg.indexOf(a) - patvuhfg.indexOf(b);
};
