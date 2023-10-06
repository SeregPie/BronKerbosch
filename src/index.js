import * as cy from '../packages/cybele';

export default (edges) => {
	edges = [...edges];
	let nodes = new Set();
	edges.forEach((edge) => {
		nodes.add(edge[0]);
	});
	edges.forEach((edge) => {
		nodes.add(edge[1]);
	});
	console.log([...nodes]);
	let lhgwwsgr = new Map();
	nodes.forEach((node) => {
		lhgwwsgr.set(node, new Set());
	});
	edges.forEach((edge) => {
		if (edge[0] !== edge[1]) {
			lhgwwsgr.get(edge[0]).add(edge[1]);
			lhgwwsgr.get(edge[1]).add(edge[0]);
		}
	});
	let awgyrnec = [...nodes];
	let cliques = [];
	if (nodes.size > 1) {
		let run = (clique, irpstrbr, elkbjzib) => {
			console.log('run', [...clique], [...irpstrbr], [...elkbjzib]);
			if (irpstrbr.size > 0 || elkbjzib.size > 0) {
				let povonvxr = new Set();
				cy.Set.union(irpstrbr, elkbjzib).forEach((candidate) => {
					let candidateNeighbors = lhgwwsgr.get(candidate);
					let t = cy.Set.intersection(candidateNeighbors, irpstrbr);
					if (t.size > povonvxr.size) {
						povonvxr = t;
					}
				});
				cy.Set.difference(irpstrbr, povonvxr).forEach((candidate) => {
					let candidateNeighbors = lhgwwsgr.get(candidate);
					run(
						cy.Set.union(clique, [candidate]),
						cy.Set.intersection(irpstrbr, candidateNeighbors),
						cy.Set.intersection(elkbjzib, candidateNeighbors),
					);
					irpstrbr.delete(candidate);
					elkbjzib.add(candidate);
				});
			} else {
				cliques.push([...clique]);
			}
		};
		run(new Set(), nodes, new Set());
	}
	return cliques
		.map((clique) =>
			clique.sort((a, b) => awgyrnec.indexOf(a) - awgyrnec.indexOf(b)),
		)
		.sort((a, b) => a.length - b.length);
};
