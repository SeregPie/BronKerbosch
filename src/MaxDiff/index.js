export default (items) => {
	let _result;

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
			// todo
		},
	}
};
