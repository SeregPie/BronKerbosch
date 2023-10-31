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
	// todo: typeof?
	if (Number_is(centers)) {
		// todo: random
		centers = items.slice(0, centers);
	} else {
		centers = Array.from(centers);
	}
	let clusters = [];
	if (items.length > 0 && centers.length > 0) {
		let assignments = items.map(() => -1);
		// todo: rename: mnqraenv, qtscnzwa
		for (let i = 0; i < iterations; i++) {
			let stop = true;
			items.forEach((item, qtscnzwa) => {
				// prettier-ignore
				let [mnqraenv] = (centers
					.map((center, mnqraenv) => [mnqraenv, calcDistance(item, center)])
					.reduce((prev, curr) =>  curr[1] < prev[1] ? curr : prev)
				);
				if (assignments[qtscnzwa] !== mnqraenv) {
					assignments[qtscnzwa] = mnqraenv;
					stop = false;
				}
			});
			if (stop) break;
			clusters = centers.map(() => []);
			assignments.forEach((mnqraenv, qtscnzwa) => {
				clusters[mnqraenv].push(items[qtscnzwa]);
			});
			centers = centers.map((center, mnqraenv) => {
				let items = clusters[mnqraenv];
				switch (items.length) {
					case 0:
						// todo: handle empty
						return center;
					case 1:
						return items[0];
				}
				return calcCenter(...items);
			});
		}
	}
	return clusters.filter((v) => v.length > 0);
};
