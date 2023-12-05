import difference from './.ponies/Set.prototype.difference';
import intersection from './.ponies/Set.prototype.intersection';
import union from './.ponies/Set.prototype.union';

export default (graph) => {
	graph = Array.from(graph);
	let items = new Set();
	{
		for (let i = 0; i < 2; i++) {
			graph.forEach((edge) => {
				items.add(edge[i]);
			});
		}
		items = [...items];
	}
	// todo: rename
	let mapItem2Item = new Map();
	{
		items.forEach((item) => {
			mapItem2Item.set(item, new Set());
		});
		graph.forEach(([item0, item1]) => {
			if (item0 !== item1 /* todo: needed? */) {
				mapItem2Item.get(item0).add(item1);
				mapItem2Item.get(item1).add(item0);
			}
		});
	}
	let result = [];
	let run = (currItems, nextItems, prevItems) => {
		if (nextItems.size > 0 || prevItems.size > 0) {
			// todo: rename
			let povonvxr = new Set();
			union(nextItems, prevItems).forEach((item) => {
				let itemNeighbors = mapItem2Item.get(item);
				let t = intersection(itemNeighbors, nextItems);
				if (t.size > povonvxr.size) {
					povonvxr = t;
				}
			});
			difference(nextItems, povonvxr).forEach((item) => {
				let itemNeighbors = mapItem2Item.get(item);
				run(
					// prettier-ignore
					(new Set(currItems)).add(item),
					intersection(nextItems, itemNeighbors),
					intersection(prevItems, itemNeighbors),
				);
				nextItems.delete(item);
				prevItems.add(item);
			});
		} else if (currItems.size > 0 /* todo: needed? */) {
			result.push([...currItems]);
		}
	};
	run(new Set(), new Set(items), new Set());
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
