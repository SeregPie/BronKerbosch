export default (self, iterable) => {
	let result = new Set(self);
	Array.from(iterable).forEach((value) => {
		result.add(value);
	});
	return result;
};
