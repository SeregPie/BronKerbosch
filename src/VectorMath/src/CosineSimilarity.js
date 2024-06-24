import Math_clamp from './@core/Math/clamp';
import Number_isAlmostEqual from './@core/Number/isAlmostEqual';

import dot from './dot';
import length from './length';

export default function(vector, otherVector) {
	let denominator = length(vector) * length(otherVector);
	if (denominator) {
		let numerator = dot(vector, otherVector);
		let n = Math_clamp(numerator / denominator, -1, 1);
		return Number_isAlmostEqual(1, n) ? 1 : n;
	}
	return 0;
}
