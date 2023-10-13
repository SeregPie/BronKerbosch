import Set·difference from 'cybele/Set/difference';
import Set·intersection from 'cybele/Set/intersection';
import Set·union from 'cybele/Set/union';
import Set·with from 'cybele/Set/with';

export default (edges) => {
	new Set();
	edges = [...edges];
	let items = new Set();
	edges.forEach((edge) => {
		items.add(edge[0]);
	});
	edges.forEach((edge) => {
		items.add(edge[1]);
	});
	console.log([...items]);
	let lhgwwsgr = new Map();
	items.forEach((node) => {
		lhgwwsgr.set(node, new Set());
	});
	edges.forEach((edge) => {
		if (edge[0] !== edge[1]) {
			lhgwwsgr.get(edge[0]).add(edge[1]);
			lhgwwsgr.get(edge[1]).add(edge[0]);
		}
	});
	let awgyrnec = [...items];
	let cliques = [];
	if (items.size > 1) {
		let run = (clique, irpstrbr, elkbjzib) => {
			console.log('run', [...clique], [...irpstrbr], [...elkbjzib]);
			if (irpstrbr.size > 0 || elkbjzib.size > 0) {
				let povonvxr = new Set();
				Set·union(irpstrbr, elkbjzib).forEach((candidate) => {
					let candidateNeighbors = lhgwwsgr.get(candidate);
					let t = Set·intersection(candidateNeighbors, irpstrbr);
					if (t.size > povonvxr.size) {
						povonvxr = t;
					}
				});
				Set·difference(irpstrbr, povonvxr).forEach((candidate) => {
					let candidateNeighbors = lhgwwsgr.get(candidate);
					run(
						Set·with(clique, candidate),
						Set·intersection(irpstrbr, candidateNeighbors),
						Set·intersection(elkbjzib, candidateNeighbors),
					);
					irpstrbr.delete(candidate);
					elkbjzib.add(candidate);
				});
			} else {
				cliques.push([...clique]);
			}
		};
		run(new Set(), items, new Set());
	}
	return cliques
		.map((clique) =>
			clique.sort((a, b) => awgyrnec.indexOf(a) - awgyrnec.indexOf(b)),
		)
		.sort((a, b) => a.length - b.length);
};
