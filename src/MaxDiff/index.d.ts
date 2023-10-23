// todo: rename Control, Controller, Manager, Wizard, Runner
export interface MaxDiffController<T> {
	get progress(): number;

	get complete(): boolean;

	get result(): undefined | Array<T>;

	// get/pick/find
	getCandidates(limit?: number): Array<T>;

	/*
	getOrderedPairs(): Array<[T, T]>;

	getUnorderedPairs(): Array<[T, T]>;

	getOrderedGroups(): Array<Array<T>>;

	getUnorderedGroups(): Array<Array<T>>;
	*/

	getItemsBefore(item: T): Array<T>;

	getItemsAfter(item: T): Array<T>;

	order(...items: Array<T>): void;

	orderBefore(item: T, otherItems: Iterable<T>): void;

	orderAfter(item: T, otherItems: Iterable<T>): void;

	orderFirst(item: T): void;

	orderLast(item: T): void;

	clone(): MaxDiffController<T>;
}

export default function runMaxDiff<T>(items: Iterable<T>): MaxDiffController<T>;
