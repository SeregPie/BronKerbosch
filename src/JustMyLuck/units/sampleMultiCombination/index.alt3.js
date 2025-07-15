import dfgfynqq from '../dfgfynqq';
import sample from '../sample';

export default (random, source, k) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  // todo: handle k
  let target = (() => {
    try {
      if (Number.isFinite(k)) {
        return Array(k);
      }
    } catch {}
    throw new RangeError(); // todo: message
  })();
  let tL = target.length;
  let sL = source.length;
  if (tL === 0) {
    return target;
  }
  if (sL === 0) {
    throw new RangeError(); // todo: message
  }
  if (sL === 1) {
    target.fill(source[0]); // todo
    return target;
  }
  if (tL === 1) {
    target[0] = sample(random, source);
    return target;
  }
  let tI = 0;
  let sI = 0;
  while (tL > 0 && sL > 0) {
    // todo: large numbers
    if (dfgfynqq(random) < tL / (tL + sL - 1)) {
      target[tI] = source[sI];
      tI++;
      tL--;
    } else {
      sI++;
      sL--;
    }
  }
  return target;
};
