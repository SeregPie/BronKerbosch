import dfgfynqq from '../dfgfynqq';

export default (random, min, max) => {
  {
    // todo
  }
  // todo: format
  if (!(min < max)) {
    throw new RangeError(); // todo: message
  }
  let delta = max - min;
  let n = dfgfynqq(random) * delta + min;
  if (n >= max) {
    return min;
  }
  return n;
};
