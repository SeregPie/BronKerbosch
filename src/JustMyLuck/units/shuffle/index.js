import randomInteger from '../randomInteger';

export default (random, target) => {
  if (!Array.isArray(target)) {
    throw new TypeError(); // todo: message
  }
  let i = target.length;
  while (i > 1) {
    let j = randomInteger(random, 0, i);
    i--;
    [target[i], target[j]] = [target[j], target[i]];
  }
  return target;
};
