 module.exports  = (obj1, obj2) => {
  const { name: name1, state: state1, website: website1 } = obj1;
  const { name: name2, state: state2, website: website2 } = obj2;

  return name1 === name2 && state1 === state2 && website1 === website2;


};
