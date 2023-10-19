export type KMeansOptions = Partial<{
	maxIterations: number; // todo: convergenz
	random: {(): number};
}>;

export default function runKMeans<T>(
	items: Iterable<T>,
	centers: number | Iterable<T>,
	calcDistance: {(a: T, b: T): number},
	calcCenter: {(...items: Array<T>): T},
	options?: KMeansOptions,
): Array<Array<T>>;
