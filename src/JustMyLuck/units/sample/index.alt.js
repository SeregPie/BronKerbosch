import randomInteger from '../random-integer';

export default (random, source) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  let n = source.length;
  if (n > 1) {
    return source[randomInteger(random, 0, n)];
  }
  if (n > 0) {
    return source[0];
  }
  throw new RangeError(); // todo: message
};
