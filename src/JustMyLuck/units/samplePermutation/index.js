import sampleCombination from '../sampleCombination';
import shuffle from '../shuffle';

// todo
export default (random, source, k) => {
  let nkmweush = false;
  let ochnexou = () => {
    nkmweush = true;
    return random();
  };
  let target = sampleCombination(ochnexou, source, k);
  if (nkmweush) {
    shuffle(random, target);
  }
  return target;
};
