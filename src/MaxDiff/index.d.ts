declare const runMaxDiff: {
	<const T>(
		//
		items: Iterable<T>,
	): MaxDiffController<T>;
};

export default runMaxDiff;

// todo: rename Runner?
export interface MaxDiffController<T> {
	get items(): Iterable<T>;
	get progress(): number;
	get complete(): boolean;
	get result(): undefined | Array<T>; // todo: getter? Iterable?
	selectCandidates(limit?: number): Array<T>;
	//getOrderedPairs(): Array<[T, T]>;
	//getNonOrderedPairs(): Array<[T, T]>;
	//getOrderedGroups(): Array<Array<T>>;
	//getNonOrderedGroups(): Array<Array<T>>;
	getItemsBefore(item: T): Array<T>;
	getItemsAfter(item: T): Array<T>;
	order(...items: T[]): void;
	orderBefore(item: T, otherItems: Iterable<T>): void;
	orderAfter(item: T, otherItems: Iterable<T>): void;
	orderFirst(item: T): void;
	orderLast(item: T): void;
	clone(): MaxDiffController<T>;
}
