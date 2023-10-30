import {describe, test} from 'bun:test';

import nfdkfbyy from '.';

describe.skip('nfdkfbyy', () => {
	test('...', async () => {
		// todo
		let stats = new Map();
		Array.from({length: 10 ** 5}).forEach(() => {
			let r = nfdkfbyy();
			stats.set(r, (stats.get(r) ?? 0) + 1);
		});
		console.log(stats);
	});
});
