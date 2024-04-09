export interface MaxDiffController<T> {
	readonly result?: Array<T>;

	get progress(): number;

	get complete(): boolean;

	// get/pick/find/select
	getCandidates(limit?: number): Array<T>;

	/*
	getOrderedPairs(): Array<[T, T]>;

	getUnorderedPairs(): Array<[T, T]>;

	getOrderedGroups(): Array<Array<T>>;

	getUnorderedGroups(): Array<Array<T>>;
	*/

	getItemsBefore(item: T): Array<T>;

	getItemsAfter(item: T): Array<T>;

	order(...items: T[]): void;

	orderBefore(item: T, otherItems: Iterable<T>): void;

	orderAfter(item: T, otherItems: Iterable<T>): void;

	orderFirst(item: T): void;

	orderLast(item: T): void;

	clone(): MaxDiffController<T>;
}

declare const runMaxDiff: {
	<T>(items: Iterable<T>): MaxDiffController<T>;
};

export default runMaxDiff;
