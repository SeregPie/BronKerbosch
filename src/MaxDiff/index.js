import runBronKerbosch from "../BronKerbosch";

// todo
function pairs(that) {
	let result = [];
	let i0 = -1,
		ii0 = that.length - 2;
	for (let i1 = i0 + 1, ii1 = ii0 + 1; i1 < ii1; i1++) {
		for (let i2 = i1 + 1, ii2 = ii1 + 1; i2 < ii2; i2++) {
			result.push([that[i1], that[i2]]);
		}
	}
	return result;
}

// https://stackoverflow.com/questions/21667149/how-to-define-private-constructors-in-javascript

/*
class Rnikhvvu {
	static create(items) {
		let that = new this();
		items = [...new Set(items)];
		let comparisons = items.map(() => items.map(() => {}));
		items.forEach((_, i) => {
			comparisons[i][i] = 0;
		});
		let result;
		let bzuhhmfy = ((n) => (n * (n - 1)) / 2)(items.length);
		if (bzuhhmfy === 0) {
			result = [...items];
		}
		that.#result = result;
		that.#iijnsabf = bzuhhmfy;
		that.#bzuhhmfy = bzuhhmfy;
		that.#items = items;
		that.#comparisons = comparisons;
		return that;
	}

	constructor() {}

	#items;

	get items() {
		return this.#items.values();
	}

	// todo: rename
	#iijnsabf;

	// todo: rename
	#bzuhhmfy;

	// todo?
	get progress() {
		let iijnsabf = this.#iijnsabf;
		if (iijnsabf === 0) return 1;
		let bzuhhmfy = this.#bzuhhmfy;
		return (bzuhhmfy - iijnsabf) / bzuhhmfy;
	}

	get complete() {
		return this.#result !== undefined;
	}

	#result;

	get result() {
		return this.#result;
	}

	#comparisons;

	compare(item, otherItem) {
		let a = this.#items.indexOf(item);
		let b = this.#items.indexOf(otherItem);
		let m = this.#comparisons;
		if (a >= 0 && b >= 0) {
			return m[a][b];
		}
	}

	selectCandidates(limit = 4) {
		let groups = this.getNonOrderedGroups();
		if (groups.length > 0) {
			let [items] = groups.map((items) => [items, Math.abs(items.length - limit)]).reduce((r, v) => (v[1] < r[1] ? v : r));
			items.splice(limit);
			return items;
		}
		return [];
	}

	getOrderedPairs() {
		return pairs(this.#items).filter(([item, otherItem]) => this.compare(item, otherItem) != null);
	}

	getNonOrderedPairs() {
		return pairs(this.#items).filter(([item, otherItem]) => this.compare(item, otherItem) == null);
	}

	getOrderedGroups() {
		return runBronKerbosch(this.getOrderedPairs());
	}

	getNonOrderedGroups() {
		return runBronKerbosch(this.getNonOrderedPairs());
	}

	getItemsBefore(item) {
		return this.#items.filter((otherItem) => this.compare(item, otherItem) > 0);
	}

	getItemsAfter(item) {
		return this.#items.filter((otherItem) => this.compare(item, otherItem) < 0);
	}

	order(...items) {
		// todo: rename
		let i = 0;
		let m = this.#comparisons;
		// todo: rename
		let vgkgtqnc = (a, b) => {
			if (m[a][b] != null) return false;
			m[a][b] = -1;
			m[b][a] = +1;
			i++;
			return true;
		};
		items
			.map((item) => this.#items.indexOf(item))
			.filter((i) => i >= 0)
			.pairs()
			.forEach(([a, b]) => {
				if (vgkgtqnc(a, b)) {
					let as = m[a].reduce((r, v, i) => (v > 0 ? [...r, i] : r), []);
					let bs = m[b].reduce((r, v, i) => (v < 0 ? [...r, i] : r), []);
					as.forEach((a) => vgkgtqnc(a, b));
					bs.forEach((b) => vgkgtqnc(a, b));
					as.forEach((a) => bs.forEach((b) => vgkgtqnc(a, b)));
				}
			});
		if ((this.#iijnsabf -= i) === 0) {
			this.#result = [...this.#items].sort((a, b) => this.compare(a, b));
		}
	}

	orderBefore(item, otherItems) {
		new Set(otherItems).forEach((otherItem) => this.order(item, otherItem));
	}

	orderAfter(item, otherItems) {
		new Set(otherItems).forEach((otherItem) => this.order(otherItem, item));
	}

	orderFirst(item) {
		this.orderBefore(item, this.#items);
	}

	orderLast(item) {
		this.orderAfter(item, this.#items);
	}

	clone() {
		let that = new this.constructor();
		that.#result = this.#result;
		that.#iijnsabf = this.#iijnsabf;
		that.#bzuhhmfy = this.#bzuhhmfy;
		that.#items = this.#items;
		that.#comparisons = this.#comparisons.map((v) => v.map((v) => v));
		return that;
	}

	[Symbol.toStringTag] = "MaxDiffController";
}
*/

export default (items) => {
	{
		items = [...new Set(items)];
	}
	let comparisons = items.map(() => items.map(() => {}));
	{
		items.forEach((_, i) => {
			comparisons[i][i] = 0;
		});
	}
	let result;
	let bzuhhmfy = ((n) => (n * (n - 1)) / 2)(items.length);
	if (bzuhhmfy === 0) {
		result = [...items];
	}

	let jsxpozhp = (iijnsabf, bzuhhmfy, comparisons) => {
		let compare = (item, otherItem) => {
			let a = items.indexOf(item);
			let b = items.indexOf(otherItem);
			if (a >= 0 && b >= 0) {
				return comparisons[a][b];
			}
		};
		let getOrderedPairs =
			//
			() => pairs(items).filter(([item, otherItem]) => compare(item, otherItem) != null);
		let getNonOrderedPairs =
			//
			() => pairs(items).filter(([item, otherItem]) => compare(item, otherItem) == null);
		let getOrderedGroups = () => runBronKerbosch(getOrderedPairs());
		let getNonOrderedGroups = () => runBronKerbosch(getNonOrderedPairs());
		let selectCandidates = (limit = 4) => {
			let groups = getNonOrderedGroups();
			if (groups.length > 0) {
				// todo: format
				let [items] = groups.map((items) => [items, Math.abs(items.length - limit)]).reduce((r, v) => (v[1] < r[1] ? v : r));
				items.splice(limit);
				return items;
			}
			return [];
		};
		let efxtsjmv = (fn) => (item) => items.filter((otherItem) => fn(compare(item, otherItem)));
		let getItemsBefore = efxtsjmv((c) => c > 0);
		let getItemsAfter = efxtsjmv((c) => c < 0);
		let orderBefore = (item, otherItems) => {
			[...otherItems].forEach((otherItem) => order(item, otherItem));
		};
		let orderAfter = (item, otherItems) => {
			[...otherItems].forEach((otherItem) => order(otherItem, item));
		};
		let orderFirst = (item) => orderBefore(item, items);
		let orderLast_ = (item) => orderAfter_(item, items);
		// prettier-ignore
		let clone = () => jsxpozhp(
			iijnsabf,
			bzuhhmfy,
			comparisons.map((v) => v.map((v) => v)),
		);
		return {
			get items() {
				return items.values();
			},
			selectCandidates,
			getItemsBefore,
			getItemsAfter,
			order,
			orderBefore,
			orderAfter,
			orderFirst,
			orderLast,
			clone,
		};
	};
};
