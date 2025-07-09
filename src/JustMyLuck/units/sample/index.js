import randomInteger from '../random-integer';

export default (random, source) => {
  {
    source = Array.isArray(source) ? source : Array.from(source);
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
