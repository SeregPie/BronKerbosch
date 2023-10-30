import {describe, expect, test} from 'bun:test';

import mjdttbwb from '.';

describe.skip('mjdttbwb', () => {
	test('...', async () => {
		let min = -1;
		let max = min + 4;
		// todo: repeat
		Array.from({length: 100}).forEach(() => {
			let n = mjdttbwb(min, max);
			expect(n).toBeGreaterThanOrEqual(min);
			expect(n).toBeLessThan(max);
		});
	});

	test('...', async () => {
		let n = 1;
		expect(() => mjdttbwb(n, n)).toThrow();
	});

	test('...', async () => {
		let n = 1;
		expect(() => mjdttbwb(n, n - 1)).toThrow();
	});

	test('...', async () => {
		let min = -1;
		let max = min + 4;
		// todo: repeat
		Array.from({length: 100}).forEach(() => {
			let n = mjdttbwb(min, max, true);
			expect(n).toBeGreaterThanOrEqual(min);
			expect(n).toBeLessThanOrEqual(max);
		});
	});

	test('...', async () => {
		let s = 10; // todo: rename
		let random = () => Math.floor(Math.random() * s) / s;
		// todo
		let stats = new Map();
		Array.from({length: 10 ** 6}).forEach(() => {
			let r = mjdttbwb.call(random, 0, 1, true);
			stats.set(r, (stats.get(r) ?? 0) + 1);
		});
		console.log(stats);
	});

	test('...', async () => {
		let n = 1;
		expect(mjdttbwb(n, n, true)).toBe(n);
	});

	test('...', async () => {
		let n = 1;
		expect(() => mjdttbwb(n, n - 1, true)).toThrow();
	});
});
