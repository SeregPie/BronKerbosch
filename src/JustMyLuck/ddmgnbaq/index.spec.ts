import {describe, expect, test} from 'bun:test';

import ddmgnbaq from '.';

describe.skip('ddmgnbaq', () => {
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
		let stats = new Map();
		Array.from({length: 10 ** 5}).forEach(() => {
			let r = ddmgnbaq(1 / 3);
			stats.set(r, (stats.get(r) ?? 0) + 1);
		});
		console.log(stats);
	});
});
