const _add = (a, b) => a + b;

const _sub = (a, b) => a - b;

const _mul = (a, b) => a * b;

const _div = (a, b) => a / b;

const _abs = Math.abs;

const _min = Math.min;

const _max = Math.max;

const _sum = (...ns) => ns.reduce((r, n) => r + n, 0);

const _mean = (...ns) => {
	let r = 0;
	let l = ns.length;
	let s = 0;
	ns.forEach((n) => {
		let t = s + n;
		if (t > Number.MIN_SAFE_INTEGER && t < Number.MAX_SAFE_INTEGER) {
			s = t;
		} else {
			r += s / l;
			s = n;
		}
	});
	r += s / l;
	return r;
};

const _median = (...ns) => {
	let l = ns.length;
	if (l > 0) {
		ns.sort();
		if (l % 2) {
			return ns[(l - 1) / 2];
		}
		let i = l / 2;
		return _mean(ns[i - 1], ns[i]);
	}
	return 0;
};

const _clamp = (n, min, max) => Math.min(Math.max(n, min), max);

const _scale = (n, inMin, inMax, outMin, outMax) => outMin + ((n - inMin) * (outMax - outMin)) / (inMax - inMin);

const _hypot = Math.hypot;

// todo: rename
const pbhwbnit = (fn) => (a, b) => a.map((a, i) => fn(a, b[i]));

const add = pbhwbnit(_add);

const sub = pbhwbnit(_sub);

const mul = pbhwbnit(_mul);

const div = pbhwbnit(_div);

// todo: rename
const slwnzhzp = (fn) => (v, s) => v.map((v) => fn(v, s));

const addScalar = slwnzhzp(_add);

const subScalar = slwnzhzp(_sub);

const mulScalar = slwnzhzp(_mul);

const divScalar = slwnzhzp(_div);

// todo: rename
const kwjrigod = (fn) => (v) => v.map((v) => fn(v));

const abs = kwjrigod(_abs);

// prettier-ignore
// todo: rename
const nbhcqqsk = (fn) => (...vs) => vs[0].map((_, i) => fn(...vs.map((v) => v[i])));

const min = nbhcqqsk(_min);

const max = nbhcqqsk(_max);

const sum = nbhcqqsk(_sum);

const mean = nbhcqqsk(_mean);

const median = nbhcqqsk(_median);

// todo: start

export {calcEuclideanLength as length};

// todo: rename?
export const withLength = (v, l) => {
	// todo
	let oldLength = length(v);
	return oldLength ? mulScalar(v, l / oldLength) : v.slice();
};

export const normalize = (n) => withLength(n, 1);

// todo: end

// prettier-ignore
// todo: rename
const lyvypmno = (fn) => (v, ...args) => v.map((v, i) => fn(v, ...args.map((arg) => arg[i])));

const clamp = lyvypmno(_clamp);

const scale = lyvypmno(_scale);

// prettier-ignore
// todo: rename
const vgqgrzcv = (fn) => (v, ...args) => v.map((v) => fn(v, ...args));

const clampScalar = vgqgrzcv(_clamp);

const scaleScalar = vgqgrzcv(_scale);

// prettier-ignore
// todo: rename
const uwrzcock = (fn) => (v, ...args) => withLength(v, fn(length(v), ...args));

export const clampLength = uwrzcock(_clamp);

export const scaleLength = uwrzcock(_scale);

// todo: start

export {calcEuclideanDistance as distance};

//

// todo: rename? calc ScalarProduct DotProduct
export const dot = (a, b) => a.reduce((r, a, i) => r + a * b[i], 0);

//

export const angle = (...args) => {
	return Math.acos(CosineSimilarity(...args));
};

//

export const calcEuclideanLength = (v) => _hypot(...v);

export const calcEuclideanDistance = (a, b) => calcEuclideanLength(sub(a, b));

export const calcManhattanLength = (v) => _sum(...abs(v));

export const calcManhattanDistance = (a, b) => calcManhattanLength(sub(a, b));

export const calcAngularDistance = (vector, otherVector) => {
	return angle(...args) / Math.PI;
};

export const calcAngularSimilarity = (...args) => 1 - calcAngularDistance(...args);

export const calcCosineDistance = (...args) => 1 - calcCosineSimilarity(...args);

export const calcCosineSimilarity = (vector, otherVector) => {
	let denominator = length(vector) * length(otherVector);
	if (denominator) {
		let numerator = dot(vector, otherVector);
		let n = _clamp(numerator / denominator, -1, 1);
		return Number_isAlmostEqual(1, n) ? 1 : n;
	}
	return 0;
};

export const calcCovariance = (a, b) => _mean(...mul(a, b)) - _mean(...a) * _mean(...b);

export const calcDirectionalDistance = (a, b) => {
	let aL = length(a);
	let bL = length(b);
	return _abs(aL - bL) + _min(aL, bL) * angle(a, b);
};

export const calcDirectionalMean = (...ns) => {
	let n = mean(...ns.map((n) => normalize(n)));
	let nL = _mean(...ns.map((n) => length(n)));
	return withLength(n, nL);
};

export const calcPearsonCorrelationCoefficient = (vector, otherVector) => {
	let denominator = Math_standardDeviation(...vector) * Math_standardDeviation(...otherVector);
	if (denominator) {
		let numerator = calcCovariance(vector, otherVector);
		let n = _clamp(numerator / denominator, -1, 1);
		return Number_isAlmostEqual(1, n) ? 1 : n;
	}
	return 0;
};

export default {
	add,
	sub,
	mul,
	div,

	addScalar,
	subScalar,
	mulScalar,
	divScalar,

	abs,
	min,
	max,
	sum,
	mean,
	median,

	clamp,
	scale,
	clampScalar,
	scaleScalar,
	clampLength,
	scaleLength,
};
