export const requiredString = (values) => {
  return Object.values(values).some(value => value === '' || value === 0);
};