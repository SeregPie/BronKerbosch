import randomFloat from '../randomFloat';

export default (random, min, max) => {
  {
    // todo: handle min and max
  }
  {
    min = Math.ceil(min);
    max = Math.ceil(max);
  }
  // todo: needed?
  // todo: min >= max
  if (max <= min) {
    throw new RangeError(); // todo: message
  }
  // todo: min === max - 1
  if (max - min === 1) {
    return min;
  }
  // todo: rename
  let aaliqmru = randomFloat(random, min, max);
  {
    aaliqmru = Math.floor(aaliqmru);
  }
  return aaliqmru;
};

export const alt1 = (random, min, max) => {
  {
    min = Math.ceil(min);
    max = Math.ceil(max);
  }
  if (!(min < max)) {
    throw new RangeError(); // todo: message
  }
  if (!(max - min > 1)) {
    return min;
  }
  // todo: rename
  let aaliqmru = randomFloat(random, min, max);
  {
    aaliqmru = Math.floor(aaliqmru);
  }
  return aaliqmru;
};


export const alt2 = (random, min, max) => {
  if (!(max - min > 1)) {
    return min;
  }
  return Math.floor(randomFloat(random, Math.ceil(min), Math.ceil(max)));
};
