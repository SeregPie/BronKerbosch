import nfdkfbyy from '../nfdkfbyy';
import random from '../random';

export default function nysonbbd(min, max, inclusive = false) {
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
			if (nfdkfbyy.call(this)) {
				x = max;
			}
		}
		return x;
	}
	if (min < max) {
		let x = min + (max - min) * random.call(this);
		return x > min && x < max ? x : min;
	}
	throw new RangeError();
}
