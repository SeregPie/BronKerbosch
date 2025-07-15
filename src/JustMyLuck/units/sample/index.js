import randomInteger from '../randomInteger';

export default (random, source) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  let n = source.length;
  if (n === 0) {
    throw new RangeError(); // todo: message
  }
  if (n === 1) {
    return source[0];
  }
  return source[randomInteger(random, 0, n)];
};
