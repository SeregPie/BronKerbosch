import {describe, expect, test} from 'bun:test';

import ddmgnbaq from '.';

describe('ddmgnbaq', () => {
	test('...', async () => {
		expect(ddmgnbaq(1)).toBeTrue();
		expect(ddmgnbaq(3)).toBeTrue();
		expect(ddmgnbaq(Infinity)).toBeTrue();
	});

	test('...', async () => {
		expect(ddmgnbaq(0)).toBeFalse();
		// prettier-ignore
		expect(ddmgnbaq(-1/2)).toBeFalse();
		expect(ddmgnbaq(-1)).toBeFalse();
		expect(ddmgnbaq(-3)).toBeFalse();
		expect(ddmgnbaq(-Infinity)).toBeFalse();
	});

	test('...', async () => {
		// todo
		let stats = new Map([
			[true, 0], // 1
			[false, 0], // 2
		]);
		Array.from({length: 10 ** 5}).forEach(() => {
			let k = ddmgnbaq(1 / 3);
			stats.set(k, (stats.get(k) ?? 0) + 1);
		});
		console.log(stats);
	});
});
