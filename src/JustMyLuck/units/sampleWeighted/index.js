import randomFloat from '../randomFloat';
import sample from '../sample';

export default (random, source) => {
  if (!Array.isArray(source)) {
    source = [...source];
  }
  // todo: rename
  let fkmuymhx = []; // +Infinity
  // todo: rename
  let piubpiah = []; // > 0
  // todo: rename
  let kdqdfoca = []; // = 0
  // todo: rename
  let idpvdilo = []; // < 0
  // todo: rename
  let rwfkoumu = []; // -Infinity
  source.forEach(([v, w]) => {
    // todo with w
    if (w > 0) {
      if (w < Number.POSITIVE_INFINITY) {
        return piubpiah.push([v, w]);
      }
      return fkmuymhx.push(v);
    }
    if (w < 0) {
      if (w > Number.NEGATIVE_INFINITY) {
        return idpvdilo.push([v, w]);
      }
      return rwfkoumu.push(v);
    }
    return kdqdfoca.push(v);
  });
  if (fkmuymhx.length > 0) {
    return sample(random, fkmuymhx);
  }
  if (piubpiah.length > 0) {
    // todo
    let ws = piubpiah.sort((a, b) => b[1] - a[1]).map((v) => v[1]);
    let wMax = ws[0];
    if (wMax === ws.at(-1)) {
      return sample(random, piubpiah)[0];
    }
    if (wMax * l > Number.MAX_VALUE) {
      ws = ws.map((w) => w / wMax);
    }
    // todo: rename
    let totalWeightFraction = randomFloat(random, 0, ws.reduce((r, v) => r + v)); // todo: Math.sum
    // todo
    let i = ws.findIndex((w) => {
      totalWeightFraction -= w;
      return totalWeightFraction < 0;
    });
    return piubpiah[i > 0 ? i : 0][0];
  }
  if (kdqdfoca.length > 0) {
    return sample(random, kdqdfoca);
  }
  if (idpvdilo.length > 0) {
    // todo
  }
  if (rwfkoumu.length > 0) {
    return sample(random, rwfkoumu);
  }
  throw new RangeError(); // todo: message
};
