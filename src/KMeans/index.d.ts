declare const runKMeans: {
	<const T>(
		items: Iterable<T>,
		centers: number | Iterable<T>,
		calcDistance: (a: NoInfer<T>, b: NoInfer<T>) => number,
		calcCenter: (...vs: NoInfer<T>[]) => NoInfer<T>,
		options?: Partial<{
			iterations: number;
			tolerance: number;
			random: () => number;
			report0: (info: {
				//
				centers: Array<NoInfer<T>>;
			}) => void;
			report1: (info: {
				//
				iteration: number;
				centers: Array<{
					//
					value: NoInfer<T>;
					items: Array<{
						value: NoInfer<T>;
						distance: number;
					}>;
				}>;
			}) => void;
			report2: (info: {
				//
				converged: boolean;
				iterations: number;
			}) => void;
		}>,
	): Array<Array<T>>;
};

export default runKMeans;
