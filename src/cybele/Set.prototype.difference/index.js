export default (that, other) => {
	let result = new Set(that);
	other.forEach((value) => {
		result.delete(value);
	});
	return result;
};
