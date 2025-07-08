import shuffle1 from "./frhuunun/shuffle";

export {shuffle1};

// todo: rename
export interface Random {
  (): number;
}

export function useMersenneTwister(
  seed: number,
): {
  random: Random;
};



export function chance(
  random: Random,
  p: number,
): boolean;

export function randomBoolean(
  random: Random,
): boolean;

export function randomBooleanWeighted(
  random: Random,
  w: number,
): boolean;

export function randomFloat(
  random: Random,
  min: number,
  max: number,
): number;

export function randomInteger(
  random: Random,
  min: number,
  max: number,
): number;

export function sample<const T>(
  random: Random,
  source: Iterable<T>,
): T;

export function sampleWeighted<const T>(
  random: Random,
  source: Iterable<Readonly<[T, number]>>,
): T;

export function sampleCombination<const T>(random: Random, source: Iterable<T>, k: number): Array<T>;

export function sampleCombinationWeighted<const T>(
  random: Random,
  source: Iterable<Readonly<[T, number]>>,
  k: number,
): Array<T>;

export function samplePermutation<const T>(
  random: Random,
  source: Iterable<T>,
  k: number,
): Array<T>;

export function samplePermutationWeighted<const T>(
  random: Random,
  source: Iterable<Readonly<[T, number]>>,
  k: number,
): Array<T>;

export function sampleMultiCombination<const T>(
  random: Random,
  source: Iterable<T>,
  k: number,
): Array<T>;

export function sampleMultiCombinationWeighted<const T>(
  random: Random,
  source: Iterable<Readonly<[T, number]>>,
  k: number,
): Array<T>;

export function sampleMultiPermutation<const T>(
  random: Random,
  source: Iterable<T>,
  k: number,
): Array<T>;

export function sampleMultiPermutationWeighted<const T>(
  random: Random,
  source: Iterable<Readonly<[T, number]>>,
  k: number,
): Array<T>;

export function shuffle<const T>(
  random: Random,
  source: Iterable<T>,
): Array<T>;
