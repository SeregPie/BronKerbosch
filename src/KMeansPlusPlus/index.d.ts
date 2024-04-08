import {KMeansOptions} from '../KMeans';

export type KMeansPlusPlusOptions = KMeansOptions;

declare const runKMeansPlusPlus: {
	<T>(
		items: Iterable<T>,
		centers: number | Iterable<T>,
		calcDistance: {(a: NoInfer<T>, b: NoInfer<T>): number},
		calcCenter: {(...vs: NoInfer<T>[]): NoInfer<T>},
		options?: KMeansPlusPlusOptions,
	): Array<Array<T>>;
};

export default runKMeansPlusPlus;
