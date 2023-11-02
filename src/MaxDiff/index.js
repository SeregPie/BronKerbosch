import runBronKerbosch from '../BronKerbosch';

export default (items) => {
	let _items = [...new Set(items)];
	let _pairs = [];
	{
		for (let i1 = 0; i1 < _items.length - 1; i1++) {
			for (let i2 = i1 + 1; i2 < _items.length; i2++) {
				_pairs.push(_items[i1], _items[i2]);
			}
		}
	}
	let run = (_comparisons, _progress, _result) => {
		// todo: rename
		let _ptvehwne = (a, b) => {
			a = _items.indexOf(a);
			b = _items.indexOf(b);
			return _comparisons[a][b];
		};
		// todo: rename
		let _zlnlkmaa = (a, b) => {
			a = _items.indexOf(a);
			b = _items.indexOf(b);
			_comparisons[a][b] = -1;
			_comparisons[b][a] = +1;
		};
		// todo: rename
		let _pvlsippv = () => {
			// todo
			if (_comparisons.every((v) => v.every((v) => v != null))) {
				_progress = partial / _pairs.length;
			} else {
				_progress = 1;
				_result = [..._items].sort(_ptvehwne);
			}
		};
		let _memUnorderedPairs;
		let getUnorderedPairs = () => {
			// prettier-ignore
			return _pairs.filter(([item, otherItem]) => _ptvehwne(item, otherItem) == null);
		};
		let _memUnorderedGroups;
		let getUnorderedGroups = () => runBronKerbosch(getUnorderedPairs());
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
		let order = (...items) => {
			// todo
			items = items.filter((item) => _items.includes(item));
			for (let i1 = 0; i1 < items.length - 1; i1++) {
				for (let i2 = i1 + 1; i2 < items.length; i2++) {
					let item1 = items[i1];
					let item2 = items[i2];
					if (_ptvehwne(item1, item2) == null) {
						let items1 = getItemsBefore(item1);
						let items2 = getItemsAfter(item2);
						_zlnlkmaa(item1, item2);
						items1.forEach((item1) => {
							_zlnlkmaa(item1, item2);
						});
						items2.forEach((item2) => {
							_zlnlkmaa(item1, item2);
						});
						items1.forEach((item1) => {
							items2.forEach((item2) => {
								_zlnlkmaa(item1, item2);
							});
						});
						_pvlsippv();
					}
				}
			}
		};
		let orderBefore = (item, otherItems) => {
			// prettier-ignore
			(new Set(otherItems)).forEach((otherItem) => {
				order(item, otherItem);
			});
		};
		let orderAfter = (item, otherItems) => {
			// prettier-ignore
			(new Set(otherItems)).forEach((otherItem) => {
				order(otherItem, item);
			});
		};
		let orderFirst = (item) => orderBefore(item, _items);
		let orderLast = (item) => orderAfter(item, _items);
		return {
			get progress() {
				return _progress;
			},
			get complete() {
				return _result !== undefined;
			},
			get result() {
				return _result;
			},
			getCandidates,
			getItemsBefore,
			getItemsAfter,
			order(...items) {
				// todo
				for (let i1 = 0; i1 < items.length - 1; i1++) {
					for (let i2 = i1 + 1; i2 < items.length; i2++) {
						order(items[i1], items[i2]);
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
	let _comparisons = _items.map(() => _items.map(() => {}));
	{
		_items.forEach((_, i) => {
			_comparisons[i][i] = 0;
		});
	}
	let _progress = 0;
	let _result;
	{
		if (_items.length < 2) {
			_progress = 1;
			_result = [..._items];
		}
	}
	return run(
		//
		_comparisons,
		_progress,
		_result,
	);
};
