// prettier-ignore
export type NearestNeighborChainCluster<T> = Array<T | NearestNeighborChainCluster<T>>;

export function runNearestNeighborChain<T>(
	items: Iterable<T>,
	calcDistance: {(a: T, b: T): number},
): NearestNeighborChainCluster<T>;
