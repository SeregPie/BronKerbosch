import dfgfynqq from '../dfgfynqq';

export default (random, min, max) => {
  // todo: handle min and max
  // todo: format
  if (!(min < max)) {
    throw new RangeError(); // todo: message
  }
  let delta = max - min;
  let n = dfgfynqq(random) * delta + min;
  // todo: format
  if (n >= max) {
    return min;
  }
  return n;
};
