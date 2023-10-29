function Number_is(v) {
	return typeof v === 'number';
}

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
	items = Array.from(items);
	if (Number_is(centers)) {
		centers = items.slice(0, centers);
	} else {
		centers = Array.from(centers);
	}
	/*
	centers = ((v) => {
		if (typeof v === 'number') {
			centers = Array.from({length: centers}, () => 0);
		}
		return Array.from(v);
	})(centers);

	luck.pickCombination(values, clustersCount);
	if (typeof centers === 'number') {
		centers = Array.from({length: centers}, () => 0);
	}
	let assignments = items.map(() => -1);
	item = {
		cluster: null | cluster,
	};
	cluster = {
		center,
		items,
	};
	*/
	if (items.length > 0 && centers.length > 0) {
		for (let i = 0; i < iterations; i++) {
			let stop = true;
			items.forEach((item, i) => {
				// prettier-ignore
				let center = (centers
					.map((center, i) => [calcDistance(item, center), center, i])
					.reduce((prev, curr) =>  curr[0] < prev[0] ? curr : prev)
				)[1];
				/*
				let v = centers.findIndexOfMin((center) => calcDistance(item, center));
				if (assignments[i] !== v) {
					assignments[i] = v;
					stop = false;
				}
				*/
			});
			if (stop) break;
			/*centers = centers.map((center, i) => {
				let items = clusters[i];
				switch (items.length) {
					case 0:
						return center;
					case 1:
						return items[0];
				}
				return calcCenter(...items);
			});*/
		}
	}
	return [];
};
