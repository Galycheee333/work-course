const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};
const cloneDeep = (data) => {
  const result = structuredClone(data);
  return result;
};

const result = cloneDeep(data);

console.log(data !== result);
