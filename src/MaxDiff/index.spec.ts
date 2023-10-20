import {describe, expect, test} from 'bun:test';

import runMaxDiff from '.';

// todo: rename instance

describe.skip('runBronKerbosch', () => {
	test('...', async () => {
		let instance = runMaxDiff([]);

		expect(instance.complete).toBeTrue();
		expect(instance.progress).toBe(1);
		expect(instance.result).toEqual([]);
		expect(instance.getCandidates(4)).toEqual([]);
		expect(instance.getUnorderedPairs()).toEqual([]);
		expect(instance.getUnorderedGroups()).toEqual([]);
		expect(instance.getOrderedPairs()).toEqual([]);
		expect(instance.getOrderedGroups()).toEqual([]);
	});

	test('...', async () => {
		let instance = runMaxDiff(['a']);

		expect(instance.complete).toBeTrue();
		expect(instance.progress).toBe(1);
		expect(instance.result).toEqual(['a']);
		expect(instance.getCandidates(4)).toEqual([]);
		expect(instance.getUnorderedPairs()).toEqual([]);
		expect(instance.getUnorderedGroups()).toEqual([]);
		expect(instance.getOrderedPairs()).toEqual([]);
		expect(instance.getOrderedGroups()).toEqual([]);
		expect(instance.getItemsBefore('a')).toEqual([]);
		expect(instance.getItemsAfter('a')).toEqual([]);
	});

	test('...', async () => {
		let instance = runMaxDiff(['a', 'b']);

		expect(instance.complete).toBeFalse();
		expect(instance.progress).toBe(0);
		expect(instance.result).toBeUndefined();
		expect(instance.getCandidates(4)).toEqual(['a', 'b']);
		expect(instance.getUnorderedPairs()).toEqual([['a', 'b']]);
		expect(instance.getUnorderedGroups()).toEqual([['a', 'b']]);
		expect(instance.getOrderedPairs()).toEqual([]);
		expect(instance.getOrderedGroups()).toEqual([]);
		expect(instance.getItemsBefore('a')).toEqual([]);
		expect(instance.getItemsAfter('a')).toEqual([]);
		expect(instance.getItemsBefore('b')).toEqual([]);
		expect(instance.getItemsAfter('b')).toEqual([]);

		instance.order('b', 'a');

		expect(instance.complete).toBeTrue();
		expect(instance.progress).toBe(1);
		expect(instance.result).toEqual(['b', 'a']);
		expect(instance.getCandidates(4)).toEqual([]);
		expect(instance.getUnorderedPairs()).toEqual([]);
		expect(instance.getUnorderedGroups()).toEqual([]);
		expect(instance.getOrderedPairs()).toEqual([['b', 'a']]);
		expect(instance.getOrderedGroups()).toEqual([['b', 'a']]);
		expect(instance.getItemsBefore('a')).toEqual(['b']);
		expect(instance.getItemsAfter('a')).toEqual([]);
		expect(instance.getItemsBefore('b')).toEqual([]);
		expect(instance.getItemsAfter('b')).toEqual(['a']);
	});

	test('...', async () => {
		let instance = runMaxDiff(['a', 'b', 'c']);

		expect(instance.complete).toBeFalse();
		expect(instance.progress).toBe(0);
		expect(instance.result).toBeUndefined();
		expect(instance.getCandidates(4)).toEqual(['a', 'b', 'c']);
		// prettier-ignore
		expect(instance.getUnorderedPairs()).toEqual([['a', 'b'], ['a', 'c'], ['b', 'c']]);
		expect(instance.getUnorderedGroups()).toEqual([['a', 'b', 'c']]);
		expect(instance.getOrderedPairs()).toEqual([]);
		expect(instance.getOrderedGroups()).toEqual([]);
		expect(instance.getItemsBefore('a')).toEqual([]);
		expect(instance.getItemsAfter('a')).toEqual([]);
		expect(instance.getItemsBefore('b')).toEqual([]);
		expect(instance.getItemsAfter('b')).toEqual([]);
		expect(instance.getItemsBefore('c')).toEqual([]);
		expect(instance.getItemsAfter('c')).toEqual([]);

		instance.order('c', 'a');

		expect(instance.complete).toBeFalse();
		// prettier-ignore
		expect(instance.progress).toBe(1/3);
		expect(instance.result).toBeUndefined();
		expect(instance.getCandidates(4)).toEqual(['a', 'b', 'c']);
		// prettier-ignore
		expect(instance.getUnorderedPairs()).toEqual([['a', 'b'], ['b', 'c']]);
		// prettier-ignore
		expect(instance.getUnorderedGroups()).toEqual([['a', 'b'], ['b', 'c']]);
		expect(instance.getOrderedPairs()).toEqual([['c', 'a']]);
		expect(instance.getOrderedGroups()).toEqual([['c', 'a']]);
		expect(instance.getItemsBefore('a')).toEqual(['c']);
		expect(instance.getItemsAfter('a')).toEqual([]);
		expect(instance.getItemsBefore('b')).toEqual([]);
		expect(instance.getItemsAfter('b')).toEqual([]);
		expect(instance.getItemsBefore('c')).toEqual([]);
		expect(instance.getItemsAfter('c')).toEqual(['a']);

		instance.order('c', 'b');

		expect(instance.complete).toBeFalse();
		// prettier-ignore
		expect(instance.progress).toBe(2/3);
		expect(instance.result).toBeUndefined();
		expect(instance.getCandidates(4)).toEqual(['a', 'b']);
		expect(instance.getUnorderedPairs()).toEqual([['a', 'b']]);
		expect(instance.getUnorderedGroups()).toEqual([['a', 'b']]);
		// prettier-ignore
		expect(instance.getOrderedPairs()).toEqual([['c', 'a'], ['c', 'b']]);
		// prettier-ignore
		expect(instance.getOrderedGroups()).toEqual([['c', 'a'], ['c', 'b']]);
		expect(instance.getItemsBefore('a')).toEqual(['c']);
		expect(instance.getItemsAfter('a')).toEqual([]);
		expect(instance.getItemsBefore('b')).toEqual(['c']);
		expect(instance.getItemsAfter('b')).toEqual([]);
		expect(instance.getItemsBefore('c')).toEqual([]);
		expect(instance.getItemsAfter('c')).toEqual(['a', 'b']);

		instance.order('b', 'a');

		expect(instance.complete).toBeTrue();
		expect(instance.progress).toBe(1);
		expect(instance.result).toEqual(['c', 'b', 'a']);
		expect(instance.getCandidates(4)).toEqual([]);
		expect(instance.getUnorderedPairs()).toEqual([]);
		expect(instance.getUnorderedGroups()).toEqual([]);
		// prettier-ignore
		expect(instance.getOrderedPairs()).toEqual([['b', 'a'], ['c', 'a'], ['c', 'b']]); // order?
		expect(instance.getOrderedGroups()).toEqual([['c', 'b', 'a']]);
		expect(instance.getItemsBefore('a')).toEqual(['b', 'c']); // order?
		expect(instance.getItemsAfter('a')).toEqual([]);
		expect(instance.getItemsBefore('b')).toEqual(['c']);
		expect(instance.getItemsAfter('b')).toEqual(['a']);
		expect(instance.getItemsBefore('c')).toEqual([]);
		expect(instance.getItemsAfter('c')).toEqual(['a', 'b']);
	});
});

/*

{
	let instance = runMaxDiff(['a', 'b', 'c']);
	expect(instance.items, ['a', 'b', 'c']);
	assert.equal(instance.complete, false);
	assert.equal(instance.progress, 0);
	expect(instance.result, undefined);
	expect(instance.getUnorderedPairs(), [
		['a', 'b'],
		['a', 'c'],
		['b', 'c'],
	]);
	expect(instance.getUnorderedGroups(), [['a', 'b', 'c']]);
	expect(instance.getOrderedPairs(), []);
	expect(instance.getOrderedGroups(), []);
	expect(instance.getItemsBefore('a'), []);
	expect(instance.getItemsBefore('b'), []);
	expect(instance.getItemsBefore('c'), []);
	expect(instance.getItemsAfter('a'), []);
	expect(instance.getItemsAfter('b'), []);
	expect(instance.getItemsAfter('c'), []);
	// finished
	let f0 = (instance) => {
		assert.equal(instance.complete, true);
		assert.equal(instance.progress, 1);
		expect(instance.result, ['c', 'b', 'a']);
		expect(instance.getUnorderedPairs(), []);
		expect(instance.getUnorderedGroups(), []);
		expect(instance.getOrderedPairs(), [
			['b', 'a'],
			['c', 'a'],
			['c', 'b'],
		]);
		expect(instance.getOrderedGroups(), [['c', 'b', 'a']]);
		expect(instance.getItemsBefore('a'), ['b', 'c']);
		expect(instance.getItemsBefore('b'), ['c']);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), ['a']);
		expect(instance.getItemsAfter('c'), ['a', 'b']);
	};
	// b < a, c < a
	let f1 = (instance) => {
		assert.equal(instance.complete, false);
		assert.equal(instance.progress, 2 / 3);
		expect(instance.result, undefined);
		expect(instance.getUnorderedPairs(), [['b', 'c']]);
		expect(instance.getUnorderedGroups(), [['b', 'c']]);
		expect(instance.getOrderedPairs(), [
			['b', 'a'],
			['c', 'a'],
		]);
		expect(instance.getOrderedGroups(), [
			['b', 'a'],
			['c', 'a'],
		]);
		expect(instance.getItemsBefore('a'), ['b', 'c']);
		expect(instance.getItemsBefore('b'), []);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), ['a']);
		expect(instance.getItemsAfter('c'), ['a']);
	};
	// c < a, c < b
	let f2 = (instance) => {
		assert.equal(instance.complete, false);
		assert.equal(instance.progress, 2 / 3);
		expect(instance.result, undefined);
		expect(instance.getUnorderedPairs(), [['a', 'b']]);
		expect(instance.getUnorderedGroups(), [['a', 'b']]);
		expect(instance.getOrderedPairs(), [
			['c', 'a'],
			['c', 'b'],
		]);
		expect(instance.getOrderedGroups(), [
			['c', 'a'],
			['c', 'b'],
		]);
		expect(instance.getItemsBefore('a'), ['c']);
		expect(instance.getItemsBefore('b'), ['c']);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), []);
		expect(instance.getItemsAfter('c'), ['a', 'b']);
	};
	((instance) => {
		instance.order('b', 'a');
		assert.equal(instance.complete, false);
		assert.equal(instance.progress, 1 / 3);
		expect(instance.result, undefined);
		expect(instance.getUnorderedPairs(), [
			['a', 'c'],
			['b', 'c'],
		]);
		expect(instance.getUnorderedGroups(), [
			['a', 'c'],
			['b', 'c'],
		]);
		expect(instance.getOrderedPairs(), [['b', 'a']]);
		expect(instance.getOrderedGroups(), [['b', 'a']]);
		expect(instance.getItemsBefore('a'), ['b']);
		expect(instance.getItemsBefore('b'), []);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), ['a']);
		expect(instance.getItemsAfter('c'), []);
		((instance) => {
			instance.order('c', 'a');
			f1(instance);
			instance.order('c', 'b');
			f0(instance);
		})(instance.clone());
		((instance) => {
			instance.order('c', 'b');
			f0(instance);
		})(instance.clone());
	})(instance.clone());
	((instance) => {
		instance.order('c', 'a');
		assert.equal(instance.complete, false);
		assert.equal(instance.progress, 1 / 3);
		expect(instance.result, undefined);
		expect(instance.getUnorderedPairs(), [
			['a', 'b'],
			['b', 'c'],
		]);
		expect(instance.getUnorderedGroups(), [
			['a', 'b'],
			['b', 'c'],
		]);
		expect(instance.getOrderedPairs(), [['c', 'a']]);
		expect(instance.getOrderedGroups(), [['c', 'a']]);
		expect(instance.getItemsBefore('a'), ['c']);
		expect(instance.getItemsBefore('b'), []);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), []);
		expect(instance.getItemsAfter('c'), ['a']);
		((instance) => {
			instance.order('b', 'a');
			f1(instance);
			instance.order('c', 'b');
			f0(instance);
		})(instance.clone());
		((instance) => {
			instance.order('c', 'b');
			f2(instance);
			instance.order('b', 'a');
			f0(instance);
		})(instance.clone());
	})(instance.clone());
	((instance) => {
		instance.order('c', 'b');
		assert.equal(instance.complete, false);
		assert.equal(instance.progress, 1 / 3);
		expect(instance.result, undefined);
		expect(instance.getUnorderedPairs(), [
			['a', 'b'],
			['a', 'c'],
		]);
		expect(instance.getUnorderedGroups(), [
			['a', 'b'],
			['a', 'c'],
		]);
		expect(instance.getOrderedPairs(), [['c', 'b']]);
		expect(instance.getOrderedGroups(), [['c', 'b']]);
		expect(instance.getItemsBefore('a'), []);
		expect(instance.getItemsBefore('b'), ['c']);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), []);
		expect(instance.getItemsAfter('c'), ['b']);
		((instance) => {
			instance.order('b', 'a');
			f0(instance);
		})(instance.clone());
		((instance) => {
			instance.order('c', 'a');
			f2(instance);
			instance.order('b', 'a');
			f0(instance);
		})(instance.clone());
	})(instance.clone());
}
{
	let instance = runMaxDiff(['a', 'b', 'c']);
	let f = (instance) => {
		assert.equal(instance.complete, false);
		assert.equal(instance.progress, 1 / 3);
		expect(instance.result, undefined);
		expect(instance.getUnorderedPairs(), [
			['a', 'b'],
			['b', 'c'],
		]);
		expect(instance.getUnorderedGroups(), [
			['a', 'b'],
			['b', 'c'],
		]);
		expect(instance.getOrderedPairs(), [['c', 'a']]);
		expect(instance.getOrderedGroups(), [['c', 'a']]);
		expect(instance.getItemsBefore('a'), ['c']);
		expect(instance.getItemsBefore('b'), []);
		expect(instance.getItemsBefore('c'), []);
		expect(instance.getItemsAfter('a'), []);
		expect(instance.getItemsAfter('b'), []);
		expect(instance.getItemsAfter('c'), ['a']);
	};
	instance.order('c', 'c', 'a', 'a', 'c', 'c');
	f(instance);
	instance.order('a', 'a', 'c', 'c', 'a', 'a');
	f(instance);
	instance.order('x', 'x', 'b', 'x', 'b', 'x', 'x');
	f(instance);
}
*/
