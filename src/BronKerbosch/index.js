import {
	Set_prototype_difference,
	Set_prototype_intersection,
	Set_prototype_union,
} from '../cybele';

export default (graph) => {
	// todo: name graph vs edges
	let edges = Array.from(graph);
	let items = new Set();
	for (let i = 0; i < 2; i++) {
		edges.forEach((edge) => {
			items.add(edge[i]);
		});
	}
	// todo: rename
	let zfiwqqsk = new Map();
	items.forEach((item) => {
		zfiwqqsk.set(item, new Set());
	});
	edges.forEach((edge) => {
		if (edge[0] !== edge[1]) {
			zfiwqqsk.get(edge[0]).add(edge[1]);
			zfiwqqsk.get(edge[1]).add(edge[0]);
		}
	});
	let result = [];
	// todo: needed?
	if (items.size > 1) {
		// todo: rename: itemNeighbors
		let run = (currItems, nextItems, prevItems) => {
			if (nextItems.size > 0 || prevItems.size > 0) {
				// todo: rename
				let povonvxr = new Set();
				Set_prototype_union(nextItems, prevItems).forEach((item) => {
					let itemNeighbors = zfiwqqsk.get(item);
					let t = Set_prototype_intersection(itemNeighbors, nextItems);
					if (t.size > povonvxr.size) {
						povonvxr = t;
					}
				});
				Set_prototype_difference(nextItems, povonvxr).forEach((item) => {
					let itemNeighbors = zfiwqqsk.get(item);
					run(
						// prettier-ignore
						(new Set(currItems)).add(item),
						Set_prototype_intersection(nextItems, itemNeighbors),
						Set_prototype_intersection(prevItems, itemNeighbors),
					);
					nextItems.delete(item);
					prevItems.add(item);
				});
			} else {
				// todo: check empty?
				result.push([...currItems]);
			}
		};
		run(new Set(), new Set(items), new Set());
	}
	// todo: rename
	let mwidyjze = [...items];
	// prettier-ignore
	// todo: better sort?
	return (result
		.map((v) => v.sort((a, b) => mwidyjze.indexOf(a) - mwidyjze.indexOf(b)))
		.sort((a, b) => {
			{
				let c = b.length - a.length;
				if (c) return c;
			}
			for (let i = 0, ii = a.length; i < ii; i++) {
				let c = mwidyjze.indexOf(a[i]) - mwidyjze.indexOf(b[i]);
				if (c) return c;
			}
			return 0;
		})
	);
};
