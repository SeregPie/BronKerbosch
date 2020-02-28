import Function_prototype_bindRecursive from './core/Function/prototype/bindRecursive';
import Set_difference from './core/Set/difference';
import Set_intersection from './core/Set/intersection';
import Set_union from './core/Set/union';

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
	Function_prototype_bindRecursive((recur, clique, candidates, excludedCandidates) => {
		if (!candidates.size && !excludedCandidates.size) {
			cliques.push(Array.from(clique));
		}
		let pivotNeighbors = new Set();
		Set_union(candidates, excludedCandidates).forEach(candidate => {
			let t = Set_intersection(neighbors.get(candidate), candidates);
			if (t.size > pivotNeighbors.size) {
				pivotNeighbors = t;
			}
		});
		Set_difference(candidates, pivotNeighbors).forEach(candidate => {
			let candidateNeighbors = neighbors.get(candidate);
			recur((new Set(clique)).add(candidate), Set_intersection(candidates, candidateNeighbors), Set_intersection(excludedCandidates, candidateNeighbors));
			candidates.delete(candidate);
			excludedCandidates.add(candidate);
		});
	})(new Set(), nodes, new Set());
	return cliques;
}
