const countWords = (text = 'one, two, three, two, ONE, one, wow') => {
  const words = _.words(sentence);
  const result = {};

  for (const word of words) {
      const lowerWord = word.toLowerCase();
      result[lowerWord] = (result[lowerWord] ?? 0) + 1;
    }
    return result;
};
console.log(countWords());