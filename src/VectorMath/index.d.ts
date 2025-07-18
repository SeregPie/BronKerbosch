declare namespace VectorMath {
  // todo: rename
  type pbhwbnit = {
    <const D extends number>(a: Readonly<Vector<D>>, b: Readonly<Vector<D>>): Vector<D>;
  };

  export const add: pbhwbnit;

  export const sub: pbhwbnit;

  export const mul: pbhwbnit;

  export const div: pbhwbnit;

  // todo: rename
  type slwnzhzp = {
    <D, V = Vector<D>>(v: Readonly<V>, s: number): V;
  };

  export const addScalar: slwnzhzp;

  export const subScalar: slwnzhzp;

  export const mulScalar: slwnzhzp;

  export const divScalar: slwnzhzp;

  // todo: rename
  type kwjrigod = {
    <D, V = Vector<D>>(v: Readonly<V>): V;
  };

  export const abs: kwjrigod;

  export const round: kwjrigod;

  // todo: rename
  type nbhcqqsk = {
    <D, V = Vector<D>>(...vs: Readonly<V>[]): V;
  };

  export const min: nbhcqqsk;

  export const max: nbhcqqsk;

  export const sum: nbhcqqsk;

  export const mean: nbhcqqsk;

  export const median: nbhcqqsk;

  // todo
  export const length: {
    <D, V = Vector<D>>(v: Readonly<V>): number;
  };

  // todo
  export const withLength: {
    <D, V = Vector<D>>(v: Readonly<V>, l: number): V;
  };

  // todo
  export const normalize: {
    <D, V = Vector<D>>(v: Readonly<V>): V;
  };

  type gsmojsyd<T> = [min: T, max: T];

  type gyodtgbo<T> = [inMin: T, inMax: T, outMin: T, outMax: T];

  type apeuxnqj<ArgsT extends []> = {
    <D, V = Vector<D>>(v: Readonly<V>, ...args: ArgsT): V;
  };

  export const clamp: {
    <D, V = Vector<D>>(v: Readonly<V>, ...args: gsmojsyd<Readonly<V>>): V;
  };

  export const scale: {
    <D, V = Vector<D>>(v: Readonly<V>, ...args: gyodtgbo<Readonly<V>>): V;
  };

  export const clampScalar: {
    <D, V = Vector<D>>(v: Readonly<V>, ...args: gsmojsyd<number>): V;
  };

  export const scaleScalar: {
    <D, V = Vector<D>>(v: Readonly<V>, inMin: number, inMax: number, outMin: number, outMax: number): V;
  };

  export const clampLength: {
    <D, V = Vector<D>>(v: Readonly<V>, min: number, max: number): V;
  };

  export const scaleLength: {
    <D, V = Vector<D>>(v: Readonly<V>, inMin: number, inMax: number, outMin: number, outMax: number): V;
  };

  //

  export const distance: {
    <D, V = Vector<D>>(a: Readonly<V>, b: Readonly<V>): number;
  };

  //

  export const calcEuclideanLength: typeof length;

  export const calcEuclideanDistance: typeof distance;

  export const calcManhattanLength: typeof length;

  export const calcManhattanDistance: typeof distance;
}

export default VectorMath;

export type Vector<D> = D extends number ? Cluster<number, D> : never;

export type Vector2 = Vector<2>;

export type Vector3 = Vector<3>;

export type Vector4 = Vector<4>;


type Cluster<T extends number, D extends number>
  =
  D extends 1
  ? readonly [T]
  : D extends 2
  ? readonly [T, T]
  : D extends 3
  ? readonly [T, T, T]
  : D extends 4
  ? readonly [T, T, T, T]
  : D extends 5
  ? readonly [T, T, T, T, T]
  : D extends 6
  ? readonly [T, T, T, T, T, T]
  : D extends 7
  ? readonly [T, T, T, T, T, T, T]
  : D extends 8
  ? readonly [T, T, T, T, T, T, T, T]
  : (readonly T[] & {readonly length: D;});
