export default function runBronKerbosch<T>(
	edges: Iterable<Readonly<[T, T]>>,
): Array<Array<T>>;

export type KMeansOptions<T> = {
	distance: {(a: T, b: T): number};
	mean: {(...nodes: ReadonlyArray<T>): T};
	maxIterations: number;
	map: {};
	random: {(): number};
};

export function runKMeans<T>(
	nodes: Iterable<T>,
	means: number | Iterable<T>,
	options: KMeansOptions<T>,
): Array<Array<T>>;

export type NearestNeighborChainCluster<T> = Array<
	T | NearestNeighborChainCluster<T>
>;

export function runNearestNeighborChain<T>(
	nodes: Iterable<T>,
	distance: {(a: T, b: T): number},
): NearestNeighborChainCluster<T>;
