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
	let result = [];
	// https://www.dcs.gla.ac.uk/~pat/jchoco/clique/enumeration/tex/report.pdf
	// https://www.sciencedirect.com/science/article/pii/S0304397515010130
	// prettier-ignore
	let recur = (currNodes, nextNodes, prevNodes) => {
		if (nextNodes.size > 0 || prevNodes.size > 0) {
			let pivotNodes = new Set();
			nextNodes.union(prevNodes).forEach((node) => {
				let t = nextNodes.intersection(node.adjacents);
				if (t.size > pivotNodes.size) {
					pivotNodes = t;
				}
			});
			nextNodes.difference(pivotNodes).forEach((node) => {
				recur(
					(new Set(currNodes)).add(node),
					nextNodes.intersection(node.adjacents),
					prevNodes.intersection(node.adjacents),
				);
				nextNodes.delete(node);
				prevNodes.add(node);
			});
		} else
		if (currNodes.size > 0) {
			result.push([...currNodes]);
		}
	};
	recur(new Set(), new Set(nodes), new Set());
	return ((v) => {
		v.forEach((v) => {
			v.sort((a, b) => a.index - b.index);
		});
		v.sort((a, b) => {
			let n = a.length;
			{
				let c = b.length - n;
				if (c) return c;
			}
			for (let i = 0; i < n; i++) {
				let c = a[i].index - b[i].index;
				if (c) return c;
			}
			return 0;
		});
		return v.map((v) => v.map((v) => v.value));
	})(result);
};
