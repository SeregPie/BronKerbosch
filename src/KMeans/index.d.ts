export type KMeansOptions = Partial<{
	iterations: number;
	random: {(): number};
}>;

declare const runKMeans: {
	<T>(
		items: Iterable<T>,
		centers: number | Iterable<T>,
		calcDistance: {(a: NoInfer<T>, b: NoInfer<T>): number},
		calcCenter: {(...vs: NoInfer<T>[]): NoInfer<T>},
		options?: KMeansOptions,
	): Array<Array<T>>;
};

export default runKMeans;
