export default (
	items,
	centers,
	calcDistance,
	calcCenter,
	{
		//
		iterations = 1024,
		random = Math.random,
	} = {},
) => {
	{
		// prettier-ignore
		items = ((x) => Array.isArray(x) ? x : Array.from(x))(items);
		centers = ((x) => {
			switch (typeof x) {
				case 'number': {
					if (x > 0) {
						let r = [...items];
						for (let i = r.length; i > x; i--) {
							r.splice(random() * i, 1);
						}
						return r;
					}
					return [];
				}
			}
			return Array.isArray(x) ? x : Array.from(x);
		})(centers);
	}
	// todo
	let clusters = [];
	if (items.length > 0 && centers.length > 0) {
		let assignments = items.map(() => -1);
		for (let i = 0; i < iterations; i++) {
			let stop = true;
			items.forEach((item, itemIndex) => {
				// prettier-ignore
				let [clusterIndex] = (centers
					.map((center, i) => [i, calcDistance(center, item)])
					.reduce((r, v) =>  v[1] < r[1] ? v : r)
				);
				if (assignments[itemIndex] !== clusterIndex) {
					assignments[itemIndex] = clusterIndex;
					stop = false;
				}
			});
			if (stop) break;
			clusters = centers.map(() => []);
			assignments.forEach((clusterIndex, itemIndex) => {
				clusters[clusterIndex].push(items[itemIndex]);
			});
			centers = clusters.map((cluster, i) => {
				switch (cluster.length) {
					case 0:
						return centers[i];
					case 1:
						return cluster[0];
				}
				return calcCenter(...cluster);
			});
		}
		clusters = clusters.filter((cluster) => cluster.length > 0);
	}
	let result = clusters;
	{
		let compare = (a, b) => items.indexOf(a) - items.indexOf(b);
		((v) => {
			v.forEach((v) => {
				v.sort((a, b) => compare(a, b));
			});
			v.sort((a, b) => {
				let n = a.length;
				{
					let c = b.length - n;
					if (c) return c;
				}
				for (let i = 0; i < n; i++) {
					let c = compare(a[i], b[i]);
					if (c) return c;
				}
				return 0;
			});
		})(result);
	}
	return result;
};
