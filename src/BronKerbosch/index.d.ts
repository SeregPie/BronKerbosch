declare const runBronKerbosch: {
	<T>(graph: Iterable<Readonly<[T, T]>>): Array<Array<T>>;
};

export default runBronKerbosch;
