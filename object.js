const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

const pick = (data, arrKeyOfData) => {
  return arrKeyOfData.reduce((target, key) => {
    if ( Object.keys(data).includes(key)) {
      target[key] = data[key];
      return target;
    }

    return target;
  }, {});

};
console.log(pick(data, ['user']));