import {describe, test} from 'bun:test';

import nfdkfbyy from '.';

describe('nfdkfbyy', () => {
	test('...', async () => {
		// todo
		let stats = new Map([
			[true, 0], // 1
			[false, 0], // 1
		]);
		Array.from({length: 10 ** 5}).forEach(() => {
			let k = nfdkfbyy();
			stats.set(k, (stats.get(k) ?? 0) + 1);
		});
		console.log(stats);
	});
});
