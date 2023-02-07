const average = (...num) => {
  if (num.length !== 0) {
    return _.sum(num) / num.length;
  }
  return 'null';
};
console.log(average())