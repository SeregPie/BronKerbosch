import random from '../random';

export default function nysonbbd() {
	// prettier-ignore
	return random.call(this) < 1/2;
}
