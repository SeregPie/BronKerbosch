let assert = require('assert').strict;

let KMeansPlusPlus = require('./index');

Array.from({length: 32}, () => {
	let vectors = [
		[1, 4],
		[6, 2],
		[0, 4],
		[1, 3],
		[5, 1],
		[4, 0],
	];
	let clusters = KMeansPlusPlus(vectors, 2);
	clusters.sort((a, b) => vectors.indexOf(a[0]) - vectors.indexOf(b[0]));
	assert.deepEqual(clusters, [
		[
			[1, 4],
			[0, 4],
			[1, 3],
		],
		[
			[6, 2],
			[5, 1],
			[4, 0],
		],
	]);
});
{
	let vectorSize = 3;
	let vectorsCount = 1000;
	let clustersCount = 12;
	let vectors = Array.from({length: vectorsCount}, () =>
		Array.from({length: vectorSize}, () => Math.random()),
	);
	let clusters = KMeansPlusPlus(vectors, clustersCount);
	assert.equal(clusters.length, clustersCount);
	assert.equal(clusters.flat().length, vectorsCount);
}
assert.deepEqual(KMeansPlusPlus([], 3), [[], [], []]);
assert.deepEqual(KMeansPlusPlus([[1], [2], [3]], 0), []);
{
	let vectors = [[1], [2], [3]];
	assert.deepEqual(KMeansPlusPlus(vectors, 1), [vectors]);
}
Array.from({length: 32}, () => {
	assert.deepEqual(KMeansPlusPlus([[1]], 2), [[[1]], []]);
});
Array.from({length: 32}, () => {
	let Athlete = class {
		constructor(name, height, weight) {
			this.name = name;
			this.height = height;
			this.weight = weight;
		}
		toJSON() {
			return this.name;
		}
	};
	let athletes = [
		new Athlete('A', 185, 72),
		new Athlete('B', 183, 84),
		new Athlete('C', 168, 60),
		new Athlete('D', 179, 68),
		new Athlete('E', 182, 72),
		new Athlete('F', 188, 77),
		new Athlete('G', 180, 71),
		new Athlete('H', 180, 70),
		new Athlete('I', 170, 56),
		new Athlete('J', 180, 88),
		new Athlete('K', 180, 67),
		new Athlete('L', 177, 76),
	];
	let clusteredAthletes = KMeansPlusPlus(athletes, 2, {
		map: (athlete) => [athlete.weight / athlete.height],
	});
	clusteredAthletes.sort(
		(a, b) => athletes.indexOf(a[0]) - athletes.indexOf(b[0]),
	);
	assert.deepEqual(JSON.parse(JSON.stringify(clusteredAthletes)), [
		['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'],
		['B', 'J', 'L'],
	]);
});

/*

let assert = require('assert').strict;

let KMeansPlusPlus = require('./index');

Array.from({length: 32}, () => {
	let vectors = [[1, 4], [6, 2], [0, 4], [1, 3], [5, 1], [4, 0]];
	let clusters = KMeansPlusPlus(vectors, 2);
	clusters.sort((a, b) => vectors.indexOf(a[0]) - vectors.indexOf(b[0]));
	assert.deepEqual(clusters, [[[1, 4], [0, 4], [1, 3]], [[6, 2], [5, 1], [4, 0]]]);
});
{
	let vectorSize = 3;
	let vectorsCount = 1000;
	let clustersCount = 12;
	let vectors = Array.from({length: vectorsCount}, () => Array.from(({length: vectorSize}), () => Math.random()));
	let clusters = KMeansPlusPlus(vectors, clustersCount);
	assert.equal(clusters.length, clustersCount);
	assert.equal(clusters.flat().length, vectorsCount);
}
assert.deepEqual(KMeansPlusPlus([], 3), [[], [], []]);
assert.deepEqual(KMeansPlusPlus([[1], [2], [3]], 0), []);
{
	let vectors = [[1], [2], [3]];
	assert.deepEqual(KMeansPlusPlus(vectors, 1), [vectors]);
}
Array.from({length: 32}, () => {
	assert.deepEqual(KMeansPlusPlus([[1]], 2), [[[1]], []]);
});
Array.from({length: 32}, () => {
	let Athlete = class {
		constructor(name, height, weight) {
			this.name = name;
			this.height = height;
			this.weight = weight;
		}
		toJSON() {
			return this.name;
		}
	};
	let athletes = [
		new Athlete('A', 185, 72), new Athlete('B', 183, 84), new Athlete('C', 168, 60),
		new Athlete('D', 179, 68), new Athlete('E', 182, 72), new Athlete('F', 188, 77),
		new Athlete('G', 180, 71), new Athlete('H', 180, 70), new Athlete('I', 170, 56),
		new Athlete('J', 180, 88), new Athlete('K', 180, 67), new Athlete('L', 177, 76),
	];
	let clusteredAthletes = KMeansPlusPlus(athletes, 2, {
		map: athlete => [athlete.weight / athlete.height],
	});
	clusteredAthletes.sort((a, b) => athletes.indexOf(a[0]) - athletes.indexOf(b[0]));
	assert.deepEqual(JSON.parse(JSON.stringify(clusteredAthletes)), [['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'], ['B', 'J', 'L']]);
});

*/
