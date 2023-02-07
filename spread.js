const company = (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };
  return {...defaultData, ...data, name};
};