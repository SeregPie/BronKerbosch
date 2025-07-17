import dfgfynqq from '../dfgfynqq';

export default (random, min, max) => {
  // todo: handle min and max
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new TypeError();
  }
  if (min >= max) {
    throw new RangeError(); // todo: message
  }
  // todo: handle Number.MAX_VALUE + Number.MAX_VALUE
  // todo: rename
  let r = dfgfynqq(random);
  if (max - min > Number.MAX_VALUE) {
    min = min / 2 + max / 2;
    r = r * 2 - 1;
  }
  // todo: rename
  let n = min + r * (max - min);
  if (n < 1) {

  }
  if (n >= max) {
    return min;
  }
  return n;
};


export const alt1 = (random, min, max) => {
  // todo: handle min and max
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new TypeError();
  }
  if (min < max) {
    // todo: handle Number.MAX_VALUE + Number.MAX_VALUE
    // todo: rename
    let r = dfgfynqq(random);
    if (max - min > Number.MAX_VALUE) {
      min = min / 2 + max / 2;
      r = r * 2 - 1;
    }
    // todo: rename
    let n = min + r * (max - min);
    if (n < 1) {

    }
    if (n >= max) {
      return min;
    }
    return n;
  }
  throw new RangeError(); // todo: message

};
