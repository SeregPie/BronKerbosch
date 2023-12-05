export default (that, other) => {
	let result = new Set();
	other.forEach((value) => {
		if (that.has(value)) {
			result.add(value);
		}
	});
	return result;
};
