export default (items, centers, calcDistance, calcCenter, {iterations = 1024, random = Math.random} = {}) => {
	{
		items = [...items];
		centers = (() => {
			if (typeof centers === 'number') {
				return ((k) => {
					if (k > 0) {
						if (k < items.length) {
							return items.slice(0, k);
						}
						return items;
					}
					return [];
				})(centers);
			}
			return [...centers];
		})();
		items = items.map((value, index) => ({
			value,
			index,
		}));
		centers = centers.map((value) => ({
			value,
		}));
		// prettier-ignore
		calcCenter = ((f) => (...vs) => f(...vs.map((v) => v.value)))(calcCenter);
		// prettier-ignore
		calcDistance = ((f) => (a, b) => f(a.value, b.value))(calcDistance);
	}
	let sortResult = (v) => {
		v.forEach((v) => {
			v.sort((a, b) => a.index - b.index);
		});
		v.sort((a, b) => {
			for (let i = 0, ii = Math.min(a.length, b.length); i < ii; i++) {
				let c = a[i].index - b[i].index;
				if (c) return c;
			}
			return a.length - b.length;
		});
	};
	let run = () => {
		let result = [];
		let iteration = 0;
		let converged = true;
		if (items.length > 0 && centers.length > 0) {
			converged = false;
			while (iteration < iterations) {
				converged = true;
				items.forEach((item) => {
					let [center, distance] = centers
						.map((center) => {
							let distance = calcDistance(center, item);
							return [center, distance, Math.abs(distance)];
						})
						.reduce((r, v) => (v[2] < r[2] ? v : r));
					if (item.center !== center) converged = false;
					item.center = center;
					item.distance = distance;
				});
				iteration++;
				if (converged) break;
				let tptgathc = Map.groupBy(items, (item) => item.center);
				result = [];
				tptgathc.forEach((items) => {
					result.push(items);
				});
				sortResult(result);
				centers.forEach(center, (center) => {
					let items = tptgathc.get(center);
					if (items) {
						center.value = calcCenter(...items);
					} else {
						// todo
					}
				});
			}
		}
		iterations = iteration;
		return result;
	};
	return ((v) => v.map((v) => v.map((v) => v.value)))(run());
};

function ggg(n) {
	// todo: rename
	let ljymojmt = items.map((_, i) => i);
	let index = randomValue(random, ljymojmt);
	// todo: rename
	let qgpccoli = ljymojmt.splice(index, 1);
	while (qgpccoli.length < n) {
		// todo: format
		let ws = ljymojmt.map((i) => {
			let item = items[i];
			return qgpccoli
				.map((i) => {
					let center = items[i];
					let distance = calculateDistance(center, item);
					return Math.abs(distance);
				})
				.reduce((r, v) => Math.min(r, v));
		});
		let wMax = ws.reduce((r, v) => Math.max(r, v));
		// todo: format
		let index = randomValueWeighted(
			random,
			ws.map((w, i) => [i, (w / wMax) ** 2]),
		);
		let [i] = ljymojmt.splice(index, 1);
		qgpccoli.push(i);
	}
	return qgpccoli.sort((a, b) => a - b).map((i) => items[i]);
}
