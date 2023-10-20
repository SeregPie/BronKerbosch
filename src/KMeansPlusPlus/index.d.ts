export type KMeansPlusPlusOptions = Partial<{
	maxIterations: number; // todo: convergenz
	random: {(): number};
}>;

export default function runKMeansPlusPlus<T>(
	items: Iterable<T>,
	centers: number,
	calcDistance: {(a: T, b: T): number},
	calcCenter: {(...items: Array<T>): T},
	options?: KMeansPlusPlusOptions,
): Array<Array<T>>;
