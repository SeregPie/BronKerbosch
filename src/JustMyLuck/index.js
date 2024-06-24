// todo: rename
export const ahkmdyhx = (fn) => {
	// todo
	let r = fn();
	if (typeof r === 'number') {
		if (0 <= r && r < 1) {
			return r;
		}
	}
	throw new Error(); // todo: message
};

export const useMersenneTwister = (seed) => {
	{
		seed = +seed; // todo
	}
	let a = [seed];
	let n = 624;
	for (let i = 1; i < n; i++) {
		a[i] = 0x6c078965 * (a[i - 1] ^ (a[i - 1] >> 30)) + i;
	}
	let i = 0;
	return () => {
		if (i > 0) {
			for (let i = 0; i < n; i++) {
				let x = (a[i] & 0x80000000) + (a[(i + 1) % n] & 0x7fffffff);
				let y = x >> 1;
				if (x % 2) {
					y ^= 0x9908b0df;
				}
				a[i] = a[(i + 397) % n] ^ y;
			}
		}
		let x = a[i];
		x ^= x >> 11;
		x ^= (x << 7) & 0x9d2c5680;
		x ^= (x << 15) & 0xefc60000;
		x ^= x >> 18;
		i = (i + 1) % n;
		return x / 0x80000001;
	};
};

// todo: needed? rename?
export const chance = (random, p) => {
	{
		p = Number(p);
	}
	if (p > 0) {
		if (p < 1) {
			return random() < p;
		}
		return true;
	}
	return false;
};

export const randomBoolean = (random) => {
	return ahkmdyhx(random) < 1 / 2;
};

export const randomBooleanWeighted = (random, w) => {
	{
		w = Number(w);
	}
	// todo
	if (w > 0) {
		if (w < Number.MAX_SAFE_INTEGER) {
			let r = ahkmdyhx(random);
			return r < w / (w + 1);
		}
		return true;
	}
	if (w < 0) {
		if (w > Number.MIN_SAFE_INTEGER) {
			let r = ahkmdyhx(random);
			return r < 1 / (1 - w);
		}
		return false;
	}
	return randomBoolean(random);
};

export const randomFloat = (random, min, max) => {
	{
		min = Math.max(min, Number.MIN_SAFE_INTEGER);
		max = Math.min(max, Number.MAX_SAFE_INTEGER);
	}
	if (Number.isNaN(min) || Number.isNaN(max)) {
		return Number.NaN;
	}
	if (min < max) {
		// todo
		let r = ahkmdyhx(random);
		let n = min + (max - min) * r;
		return n > min && n < max ? n : min;
	}
	throw new RangeError(); // todo: message
};

export const randomInteger = (random, min, max) => {
	// todo: handle Infinity and NaN
	{
		min = Math.ceil(min);
		max = Math.floor(max);
	}
	if (Number.isNaN(min) || Number.isNaN(max)) {
		return Number.NaN;
	}
	if (max - min === 1) {
		return min;
	}
	if (min < max) {
		// todo
		let r = ahkmdyhx(random);
		let n = min + (max - min) * r;
		return Math.floor(n);
	}
	throw new RangeError(); // todo: message
};

export const sample = (random, source) => {
	{
		source = Array.isArray(source) ? source : Array.from(source);
	}
	let n = source.length;
	if (n > 1) {
		let i = Math.trunc(ahkmdyhx(random) * n);
		return source[i];
	}
	if (n > 0) {
		return source[0];
	}
	throw new RangeError(); // todo: message
};

export const sampleWeighted = (random, source) => {
	{
		source = Array.isArray(source) ? source : Array.from(source);
	}
	// todo: rename
	let fkmuymhx = []; // +Infinity
	// todo: rename
	let piubpiah = []; // > 0
	// todo: rename
	let kdqdfoca = []; // = 0
	// todo: rename
	let idpvdilo = []; // < 0
	// todo: rename
	let rwfkoumu = []; // -Infinity
	source.forEach(([v, w]) => {
		if (w > 0) {
			if (w < Number.MAX_SAFE_INTEGER) {
				piubpiah.push([v, w]);
			} else {
				fkmuymhx.push(v);
			}
		} else if (w < 0) {
			if (w > Number.MIN_SAFE_INTEGER) {
				idpvdilo.push([v, w]);
			} else {
				rwfkoumu.push(v);
			}
		} else {
			kdqdfoca.push(v);
		}
	});
	let mkjkafrt = (source) => sample(random, source);
	if (fkmuymhx.length) {
		return mkjkafrt(fkmuymhx);
	}
	if (piubpiah.length) {
		// todo
		let ws = [];
		let vs = [];
		piubpiah
			.sort((a, b) => b[1] - a[1])
			.forEach(([v, w]) => {
				vs.push(v);
				ws.push(w);
			});
		let wMax = ws[0];
		let wMin = ws.at(-1);
		if (wMin === wMax) {
			return sample(random, vs);
		}
		ws = ws.map((w) => w / wMax);
		// todo: rename
		let totalWeight = ws.reduce((r, v) => r + v); // Math.sum
		// todo: rename
		let totalWeightFraction = randomFloat(random, 0, totalWeight);
		// todo
		let i = ws.findIndex((w) => {
			totalWeightFraction -= w;
			return totalWeightFraction < 0;
		});
		return vs[i > 0 ? i : 0];
	}
	if (kdqdfoca.length) {
		return mkjkafrt(kdqdfoca);
	}
	if (idpvdilo.length) {
		// todo
	}
	if (rwfkoumu.length) {
		return mkjkafrt(rwfkoumu);
	}
	throw new RangeError(); // todo: message
};

export const sampleCombination = (random, source, k) => {
	{
		source = Array.isArray(source) ? source : Array.from(source);
		k = Math.trunc(k);
		// todo: handle NonFinite
	}
	let n = source.length;
	if (k > 1) {
		if (n > k) {
			let result = [];
			let i = 0;
			while (k > 0 && n > 0) {
				if (ahkmdyhx(random) < k / n) {
					result.push(source[i]);
					k--;
				}
				i++;
				n--;
			}
			return result;
		}
		return Array.from(source); // todo
	}
	if (k > 0) {
		// todo?
		if (n > 0) {
			return [sample(random, source)];
		}
		if (n > 1) {
			let i = Math.trunc(ahkmdyhx(random) * n);
			return [source[i]];
		}
		if (n > 0) {
			return [source[0]];
		}
	}
	return [];
};

export const sampleCombinationWeighted = (random, source, k) => {
	{
		random = ahkmdyhx(random);
		source = Array.isArray(source) ? source : Array.from(source);
		k = Math.trunc(k);
	}
	// todo: rename
	let fkmuymhx = []; // +Infinity
	// todo: rename
	let piubpiah = []; // > 0
	// todo: rename
	let kdqdfoca = []; // = 0
	// todo: rename
	let idpvdilo = []; // < 0
	// todo: rename
	let rwfkoumu = []; // -Infinity
	let is = [];
	let vs = [];
	source.forEach(([v, w], i) => {
		vs.push(v);
		if (w > 0) {
			if (w < Number.POSITIVE_INFINITY) {
				piubpiah.push([i, w]);
			} else {
				fkmuymhx.push(i);
			}
		} else if (w < 0) {
			if (w > Number.NEGATIVE_INFINITY) {
				idpvdilo.push([i, w]);
			} else {
				rwfkoumu.push(i);
			}
		} else {
			kdqdfoca.push(i);
		}
	});
	let xtsmygzy = (source) => {
		if (k > 0 && source.length) {
			sampleCombination(random, source, k).forEach((i) => {
				is.push(i);
				k--;
			});
		}
	};
	xtsmygzy(fkmuymhx);

	(() => {
		let n = normalWeightedArray.length;
		if (n > 0 && k > 0) {
			return sampleWeighted(
				random,
				Array_prototype_combinations(normalWeightedArray, Math.min(k, n)).map((v) => [v.map((v) => v[0]), Array_prototype_sum(v.map((v) => v[1]))]),
			);
		}
		return [];
	})().forEach((index) => {
		is.add(index);
		k--;
	});
	xtsmygzy(kdqdfoca);
	// todo
	xtsmygzy(rwfkoumu);
	return vs.filter((_, i) => is.includes(i));
};

export const samplePermutation = (random, source, k) => {
	return shuffleInPlace(random, sampleCombination(random, source, k));
};

export const samplePermutationWeighted = (random, source, k) => {
	return shuffleInPlace(random, sampleCombinationWeighted(random, source, k));
};

export const sampleMultiCombination = (random, source, k) => {
	{
		source = Array.isArray(source) ? source : Array.from(source);
		k = Math.trunc(k);
		// todo: handle NonFinite
	}
	let n = source.length;
	if (k > 1) {
		if (n > 1) {
			let result = [];
			let i = 0;
			while (k > 0 && n > 0) {
				if (ahkmdyhx(random) < k / (k + n - 1)) {
					// todo: large numbers
					result.push(source[i]);
					k--;
				} else {
					i++;
					n--;
				}
			}
			return result;
		}
		if (n > 0) {
			return Array.from({length: k}).fill(source[0]); // todo
		}
	}
	if (k > 0) {
		// todo?
		if (n > 0) {
			return [sample(random, source)];
		}
		if (n > 1) {
			let i = Math.trunc(ahkmdyhx(random) * n);
			return [source[i]];
		}
		if (n > 0) {
			return [source[0]];
		}
		throw new RangeError(); // todo
	}
	return [];
};

export const shuffle = (random, source) => {
	// todo
	return shuffleInPlace(random, Array.from(source));
};

export const shuffleInPlace = (random, source) => {
	// todo
	{
		source = ((v) => (Array.isArray(v) ? v : Array.from(v)))(source);
	}
	let n = source.length;
	while (n > 1) {
		let i = randomInteger(random, 0, n);
		n--;
		[source[n], source[i]] = [source[i], source[n]];
	}
	return source;
};
