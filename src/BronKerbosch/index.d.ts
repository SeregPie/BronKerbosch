export default function runBronKerbosch<T>(
	edges: Iterable<Readonly<[T, T]>>,
): Array<Array<T>>;

export type KMeansOptions = Partial<{
	maxIterations: number; // todo: convergenz
	random: {(): number};
}>;

export function runKMeans<T>(
	items: Iterable<T>,
	centers: number | Iterable<T>,
	calcDistance: {(a: T, b: T): number},
	calcCenter: {(...items: Array<T>): T},
	options?: KMeansOptions,
): Array<Array<T>>;

// prettier-ignore
export type NearestNeighborChainCluster<T> = Array<T | NearestNeighborChainCluster<T>>;

export function runNearestNeighborChain<T>(
	items: Iterable<T>,
	calcDistance: {(a: T, b: T): number},
): NearestNeighborChainCluster<T>;

// todo: rename Control, Controller, Manager, Wizard
export interface MaxDiffController<T> {
	get progress(): number;
	get complete(): boolean;
	get result(): undefined | Array<T>;
	getCandidates(limit?: number): Array<T>;
	getOrderedPairs(): Array<[T, T]>;
	getUnorderedPairs(): Array<[T, T]>;
	getOrderedGroups(): Array<Array<T>>;
	getUnorderedGroups(): Array<Array<T>>;
	getItemsBefore(item: T): Array<T>;
	getItemsAfter(item: T): Array<T>;
	order(...items: Array<T>): void;
	orderBefore(item: T, otherItems: Iterable<T>): void;
	orderAfter(item: T, otherItems: Iterable<T>): void;
	orderFirst(item: T): void;
	orderLast(item: T): void;
	clone(): MaxDiffController<T>;
}

export function runMaxDiff<T>(items: Iterable<T>): MaxDiffController<T>;
