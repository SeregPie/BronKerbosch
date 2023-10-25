import {describe, expect, test} from 'bun:test';

import mjdttbwb from '.';

{
	let min = -1;
	let max = min + 4;
	Array.from({length: 100}).forEach(() => {
		let float = mjdttbwb(min, max);
		assert(min <= float && float < max);
	});
}
assert.throws(() => {
	let float = 1;
	mjdttbwb(float, float);
});
{
	let min = -1;
	let max = min + 4;
	Array.from({length: 100}).forEach(() => {
		let float = mjdttbwb(min, max, true);
		assert(min <= float && float <= max);
	});
}
{
	let n = 10;
	let luck = new JustMyLuck(() => JustMyLuck.integer(0, n) / n);
	let stats = new Stats(Array.from({length: n + 1}, (v, i) => i / n));
	Array.from({length: l}).forEach(() => {
		let float = luck.float(0, 1, true);
		stats.inc(float);
	});
	assert(stats.deviation < permittedDeviation);
}
{
	let float = 1;
	assert.equal(mjdttbwb(float, float, true), float);
}

describe('mjdttbwb', () => {
	test('...', async () => {
		let min = -1;
		let max = min + 4;
		Array.from({length: 100}).forEach(() => {
			let float = mjdttbwb(min, max);
			expect(min <= float && float < max);
		});
	});

	test('...', async () => {
		expect.(ddmgnbaq(0)).toBeFalse();
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
