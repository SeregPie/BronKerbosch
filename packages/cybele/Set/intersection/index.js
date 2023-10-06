export default (self, iterable) => {
	let result = new Set();
	self.forEach((value) => {
		if (iterable.has(value)) {
			result.add(value);
		}
	});
	return result;
};
