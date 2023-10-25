import random from '../random';

export default function nysonbbd(p) {
	if (p > 0) {
		if (p < 1) {
			return random.call(this) < p;
		}
		return true;
	}
	return false;
}
