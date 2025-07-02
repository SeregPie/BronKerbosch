export default function runBronKerbosch<const T>(
  graph: Iterable<Readonly<[T, T]>>,
): Array<Array<T>>;
