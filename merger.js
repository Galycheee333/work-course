const merger = (data, keys, mergerData) => {
  if (!keys.length) {
    return Object.assign(data, mergerData);
  }
  return keys.reduce((acc, currentValue) => {
    if (mergerData[currentValue] !== undefined) {
      data[currentValue] = mergerData[currentValue];
    }
  }, data)
}