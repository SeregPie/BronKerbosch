export type KMeansOptions = Partial<{
	iterations: number;
	random: {(): number};
}>;

export default function runKMeans<T>(
	items: Iterable<T>,
	centers: number | Iterable<T>,
	calcDistance: {(a: T, b: T): number},
	calcCenter: {(...items: T[]): T},
	options?: KMeansOptions,
): Array<Array<T>>;
