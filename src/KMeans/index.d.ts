declare const runKMeans: {
	<T>(
		items: Iterable<T>,
		centers: number | Iterable<T>,
		calcDistance: {(a: NoInfer<T>, b: NoInfer<T>): number},
		calcCenter: {(...vs: NoInfer<T>[]): NoInfer<T>},
		options?: Partial<{
			iterations: number;
			random: {(): number};
		}>,
	): Array<Array<T>>;
};

export default runKMeans;
