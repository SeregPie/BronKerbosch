import runBronKerbosch from '@seregpie/bron-kerbosch';

import Array_prototype_min from './core/Array/prototype/min';

export default (items) => {
	// prettier-ignore
	let _items = [...(new Set(items))];
	let _pairs = [];
	for (let i0 = 0; i0 < _items.length - 1; i0++) {
		for (let i1 = i0 + 1; i1 < _items.length; i1++) {
			_pairs.push(_items[i0], _items[i1]);
		}
	}
	let _comparisons = _items.map(() => _items.map(() => {}));
	_items.forEach((_, i) => {
		_comparisons[i][i] = 0;
	});
	let _progress = 0;
	let _result;
	if (_items.length < 2) {
		_progress = 1;
		_result = [..._items];
	}
	let run = (_comparisons, _progress, _result) => {
		// todo: rename
		let _ptvehwne = (item, otherItem) => {
			let index = _items.indexOf(item);
			let otherIndex = _items.indexOf(otherItem);
			return _comparisons[index][otherIndex];
		};
		// todo
		let _zlnlkmaa = (item, otherItem) => {
			let index = _items.indexOf(item);
			let otherIndex = _items.indexOf(otherItem);
			_comparisons[index][otherIndex] = -1;
			_comparisons[otherIndex][index] = +1;
		};
		// todo: rename
		let _pvlsippv = () => {
			if (_comparisons.every((v) => v.every((v) => v != null))) {
			}
			_progress = 1;
			_result = [..._items].sort(_ptvehwne);
		};
		let getUnorderedPairs = () => {
			// prettier-ignore
			return _pairs.filter(([item, otherItem]) => _ptvehwne(item, otherItem) == null);
		};
		let getOrderedPairs = () => {
			// prettier-ignore
			return _pairs.filter(([item, otherItem]) => _ptvehwne(item, otherItem) != null);
		};
		let getUnorderedGroups = () => {
			return runBronKerbosch(getUnorderedPairs());
		};
		let getOrderedGroups = () => {
			return runBronKerbosch(getOrderedPairs());
		};
		let getItemsBefore = (item) => {
			return _items.filter((otherItem) => _ptvehwne(item, otherItem) > 0);
		};
		let getItemsAfter = (item) => {
			return _items.filter((otherItem) => _ptvehwne(item, otherItem) < 0);
		};
		let getCandidates = (limit = 4) => {
			// todo
			let groups = getUnorderedGroups();
			if (groups.length > 0) {
				let items = Array_prototype_min(groups, (items) =>
					Math.abs(items.length - limit),
				);
				items.splice(limit);
				return items;
			}
			return [];
		};
		let order = (itemBefore, itemAfter) => {
			if (_items.includes(itemBefore) && _items.includes(itemAfter)) {
				if (_ptvehwne(itemBefore, itemAfter) == null) {
					let itemsBefore = getItemsBefore(itemBefore);
					let itemsAfter = getItemsAfter(itemAfter);
					_zlnlkmaa(itemBefore, itemAfter);
					itemsBefore.forEach((itemBefore) => {
						_zlnlkmaa(itemBefore, itemAfter);
					});
					itemsAfter.forEach((itemAfter) => {
						_zlnlkmaa(itemBefore, itemAfter);
					});
					itemsBefore.forEach((itemBefore) => {
						itemsAfter.forEach((itemAfter) => {
							_zlnlkmaa(itemBefore, itemAfter);
						});
					});
					_pvlsippv();
				}
			}
		};
		let orderBefore = (itemBefore, itemsAfter) => {
			// prettier-ignore
			(new Set(itemsAfter)).forEach((itemAfter) => {
				order(itemBefore, itemAfter);
			});
		};
		let orderAfter = (itemAfter, itemsBefore) => {
			// prettier-ignore
			(new Set(itemsBefore)).forEach((itemBefore) => {
				order(itemBefore, itemAfter);
			});
		};
		let orderFirst = (item) => orderBefore(item, _items);
		let orderLast = (item) => orderAfter(item, _items);
		return {
			get progress() {
				return _progress;
			},
			get complete() {
				return _result != null;
			},
			get result() {
				return _result;
			},
			getCandidates,
			getOrderedPairs,
			getUnorderedPairs,
			getOrderedGroups,
			getUnorderedGroups,
			getItemsBefore,
			getItemsAfter,
			order(...items) {
				for (let i0 = 0; i0 < items.length - 1; i0++) {
					for (let i1 = i0 + 1; i1 < items.length; i1++) {
						order(items[i0], items[i1]);
					}
				}
			},
			orderBefore,
			orderAfter,
			orderFirst,
			orderLast,
			clone() {
				return run(
					_comparisons.map((v) => v.map((v) => v)),
					_progress,
					_result,
				);
			},
		};
	};
	return run(_comparisons, _progress, _result);
};
