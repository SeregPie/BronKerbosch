export default (graph) => {
	{
		// prettier-ignore
		graph = ((v) => Array.isArray(v) ? v : Array.from(v))(graph);
	}
	let nodes = (() => {
		let items = new Set();
		for (let i = 0; i < 2; i++) {
			graph.forEach((edge) => {
				items.add(edge[i]);
			});
		}
		let nodes = new Set();
		let nodesByValue = new Map();
		[...items].forEach((value, index) => {
			let node = {
				value,
				index,
				adjacents: new Set(),
			};
			nodes.add(node);
			nodesByValue.set(value, node);
		});
		graph.forEach((edge) => {
			edge = [nodesByValue.get(edge[0]), nodesByValue.get(edge[1])];
			if (edge[0] !== edge[1]) {
				edge[0].adjacents.add(edge[1]);
				edge[1].adjacents.add(edge[0]);
			}
		});
		return nodes;
	})();
	graph = nodes;
	let result = [];
	// prettier-ignore
	let recur = (currNodes, nextNodes, prevNodes) => {
		if (nextNodes.size > 0 || prevNodes.size > 0) {
			let pivotNodes = nextNodes;
			nextNodes.union(prevNodes).forEach((node) => {
				let t = nextNodes.difference(node.adjacents);
				if (t.size < pivotNodes.size) {
					pivotNodes = t;
				}
			});
			pivotNodes.forEach((node) => {
				recur(
					(new Set(currNodes)).add(node),
					nextNodes.intersection(node.adjacents),
					prevNodes.intersection(node.adjacents),
				);
				nextNodes.delete(node);
				prevNodes.add(node);
			});
		} else
		if (currNodes.size > 1) {
			result.push([...currNodes]);
		}
	};
	// prettier-ignore
	recur(new Set(), new Set(graph), new Set());
	// prettier-ignore
	return ((v) => {
		{
			v.forEach((v) => {
				v.sort((a, b) => a.index - b.index);
			});
			v.sort((a, b) => {
				{
					let c = b.length - a.length;
					if (c) return c;
				}
				for (let i = 0, ii = Math.min(a.length, b.length); i < ii; i++) {
					let c = a[i].index - b[i].index;
					if (c) return c;
				}
				return 0;
			});
		}
		return v.map((v) => v.map((v) => v.value));
	})(result);
};
