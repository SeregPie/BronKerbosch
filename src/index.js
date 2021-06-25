import difference from './utils/difference';
import intersection from './utils/intersection';
import union from './utils/union';

export default function(edges) {
	edges = Array.from(edges);
	let nodes = new Set();
	edges.forEach(edge => {
		nodes.add(edge[0]).add(edge[1]);
	});
	if (nodes.size < 2) {
		return [];
	}
	let neighbors = new Map();
	nodes.forEach(node => {
		neighbors.set(node, new Set());
	});
	edges.forEach(edge => {
		neighbors.get(edge[0]).add(edge[1]);
		neighbors.get(edge[1]).add(edge[0]);
	});
	let cliques = [];
	let f = ((clique, candidates, excludedCandidates) => {
		if (!candidates.size && !excludedCandidates.size) {
			cliques.push(Array.from(clique));
		}
		let pivotNeighbors = new Set();
		union(candidates, excludedCandidates).forEach(candidate => {
			let t = intersection(neighbors.get(candidate), candidates);
			if (t.size > pivotNeighbors.size) {
				pivotNeighbors = t;
			}
		});
		difference(candidates, pivotNeighbors).forEach(candidate => {
			let candidateNeighbors = neighbors.get(candidate);
			f(
				(new Set(clique)).add(candidate),
				intersection(candidates, candidateNeighbors),
				intersection(excludedCandidates, candidateNeighbors),
			);
			candidates.delete(candidate);
			excludedCandidates.add(candidate);
		});
	});
	f(new Set(), nodes, new Set());
	return cliques;
}
