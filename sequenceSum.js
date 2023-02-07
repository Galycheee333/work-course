//рекурсивный процесс
const sequenceSum = (begin = -2, end = 1) => {
  if (begin > end) {
    return NaN;
  }
  else if (begin === end) {
   return end;
  }

  return begin + sequenceSum(begin + 1, end);
};
console.log(sequenceSum())