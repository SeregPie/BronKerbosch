import randomInteger from '../randomInteger';

export default (random, source) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  let l = source.length;
  if (l === 0) {
    throw new RangeError(); // todo: message
  }
  if (l === 1) {
    return source[0];
  }
  return source[randomInteger(random, 0, l)];
};
