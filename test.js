let assert = require('assert').strict;

let BronKerbosch = require('./index');

{
	let edges = [[6, 4], [4, 3], [4, 5], [5, 2], [5, 1], [1, 2]];
	let cliques = BronKerbosch(edges);
	assert.deepEqual(cliques, [[4, 6], [4, 3], [4, 5], [2, 5, 1]]);
}
{
	let edges = [];
	let cliques = BronKerbosch(edges);
	assert.deepEqual(cliques, []);
}
