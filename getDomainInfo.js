const getDomainInfo = (arrInfo = 'hexlet.io') => {
  const parts = arrInfo.split('://');
  let [scheme, name] = parts;

  if (parts.length < 2) {
    [scheme, name] = [name, scheme];
  }
  return { scheme: scheme ?? 'http', name };

};
console.log(getDomainInfo());