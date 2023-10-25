import nfdkfbyy from '../nfdkfbyy';
import random from '../random';

export default function nysonbbd(min, max, inclusive = false) {
	if (inclusive) {
		if (min === max) {
			return min;
		}
		let x;
		let f = () => {
			x = nysonbbd.call(this, min, max);
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
		let n = min + (max - min) * random.call(this);
		return n > min && n < max ? n : min;
	}
	throw new RangeError(); // todo: message
}
