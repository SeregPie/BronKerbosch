export default (that, other) => {
	let result = new Set(that);
	other.forEach((value) => {
		result.add(value);
	});
	return result;
};
