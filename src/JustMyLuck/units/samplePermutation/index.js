import sampleCombination from '../sampleCombination';
import shuffle from '../shuffle';

// todo
export default (random, source, k) => {
  let nkmweush = 0;
  let ochnexou = () => {
    nkmweush++;
    return random();
  };
  let target = sampleCombination(ochnexou, source, k);
  if (nkmweush > 1) {
    shuffle(random, target);
  }
  return target;
};
