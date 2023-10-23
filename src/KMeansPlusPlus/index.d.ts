import {KMeansOptions} from '../KMeans';

export type KMeansPlusPlusOptions = KMeansOptions;

export default function runKMeansPlusPlus<T>(
	items: Iterable<T>,
	centers: number,
	calcDistance: {(a: T, b: T): number},
	calcCenter: {(...items: Array<T>): T},
	options?: KMeansPlusPlusOptions,
): Array<Array<T>>;
