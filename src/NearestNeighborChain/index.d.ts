export default function runNearestNeighborChain<T>(
	items: Iterable<T>,
	calcDistance: {(a: T, b: T): number},
): unknown;
