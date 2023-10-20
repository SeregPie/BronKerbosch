export interface KMeansStats<T = any> {
	centers: Array<T>;
	iterations: number;
}

export type KMeansOptions<T = any> = Partial<{
	maxIterations: number; // todo: convergenz
	random: {(): number};
	stats: {(r: KMeansStats<T>): void};
}>;

export default function runKMeans<T>(
	items: Iterable<T>,
	centers: number | Iterable<T>,
	calcDistance: {(a: T, b: T): number},
	calcCenter: {(...items: T[]): T},
	options?: KMeansOptions<T>,
): Array<Array<T>>;
