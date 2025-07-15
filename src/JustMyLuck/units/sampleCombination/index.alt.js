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
  if (tL > 0) {
    if (tL < sL) {
      throw new RangeError(); // todo: message
    } else {
      if (tL === sL) {
        return [...source];
      }
      if (tL === 1) {
        return [sample(random, source)];
      }
      {
        let tI = 0;
        let sI = 0;
        while (tL > 0 && sL > 0) {
          if (dfgfynqq(random) < tL / sL) {
            target[tI] = source[sI];
            tI++;
            tL--;
          }
          sI++;
          sL--;
        }
      }
    }
  }
  return target;
};
