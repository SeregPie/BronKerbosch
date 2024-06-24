export type Random = {
	(): number;
};

export const useMersenneTwister: {
	(seed: number): Random;
};

export const chance: {
	(random: Random, p: number): boolean;
};

export const randomBoolean: {
	(random: Random): boolean;
};

export const randomBooleanWeighted: {
	(random: Random, w: number): boolean;
};

export const randomFloat: {
	(random: Random, min: number, max: number): number;
};

export const randomInteger: {
	(random: Random, min: number, max: number): number;
};

// todo: rename
export const sample: {
	<T>(random: Random, source: Iterable<T>): T;
};

// todo: rename
export const sampleWeighted: {
	<T>(random: Random, source: Iterable<Readonly<[T, number]>>): T;
};

export const sampleCombination: {
	<T>(random: Random, source: Iterable<T>, k: number): Array<T>;
};

export const sampleCombinationWeighted: {
	<T>(random: Random, source: Iterable<Readonly<[T, number]>>, k: number): Array<T>;
};

export const samplePermutation: {
	<T>(random: Random, source: Iterable<T>, k: number): Array<T>;
};

export const samplePermutationWeighted: {
	<T>(random: Random, source: Iterable<Readonly<[T, number]>>, k: number): Array<T>;
};

export const sampleMultiCombination: {
	<T>(random: Random, source: Iterable<T>, k: number): Array<T>;
};

export const sampleMultiCombinationWeighted: {
	<T>(random: Random, source: Iterable<Readonly<[T, number]>>, k: number): Array<T>;
};

export const sampleMultiPermutation: {
	<T>(random: Random, source: Iterable<T>, k: number): Array<T>;
};

export const sampleMultiPermutationWeighted: {
	<T>(random: Random, source: Iterable<Readonly<[T, number]>>, k: number): Array<T>;
};

export const shuffle: {
	<T>(random: Random, source: Iterable<T>): Array<T>;
};

// todo
export const shuffleInPlace: typeof shuffle;
