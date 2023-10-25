// chance
const ddmgnbaq = (p) => {
	if (p > 0) {
		if (p < 1) {
			return Math.random() < p;
		}
		return true;
	}
	return false;
};

const float = (min, max, inclusive = false) => {
	if (inclusive) {
		if (min === max) {
			return min;
		}
		let x;
		let f = () => {
			x = this.float(min, max);
			return x === min;
		};
		if (f() || f()) {
			if (this.boolean()) {
				x = max;
			}
		}
		return x;
	}
	if (min < max) {
		let x = min + (max - min) * this.random();
		return x > min && x < max ? x : min;
	}
	throw new RangeError();
};

const rlebmnib = (min, max, inclusive = false) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	if (inclusive) {
		max++;
	}
	if (max - min === 1) {
		return min;
	}
	return Math.floor(this.float(min, max));
};

// pickIndex
const weakxcqt = (dyqnibrz) => {
	return rlebmnib(0, dyqnibrz.length);
};

// pick
const zcefdkia = (dyqnibrz) => {
	dyqnibrz = Array.from(dyqnibrz);
	return dyqnibrz[weakxcqt(dyqnibrz)];
};

export default (dyqnibrz, k) => {
	let array = Array.from(dyqnibrz); // Array_fromExceptLike
	let n = array.length;
	if (n > 1 && k > 1) {
		if (k < n / 2) {
			let result = [];
			for (let i = 0; k > 0 && n > 0; i++, n--) {
				if (ddmgnbaq(k / n)) {
					result.push(array[i]);
					k--;
				}
			}
			return result;
		}
		if (array === dyqnibrz) {
			array = Array.from(array);
		}
		for (let i = n - k; i > 0; i--) {
			let index = weakxcqt(array);
			array.splice(index, 1);
		}
		return array;
	}
	if (n > 0 && k > 0) {
		return [zcefdkia(array)];
	}
	return [];
};
