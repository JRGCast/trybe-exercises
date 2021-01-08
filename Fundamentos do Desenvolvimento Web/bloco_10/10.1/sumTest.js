// sumTest.js
const sumTest = (a, b) => {
  let result;
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters are not numbers');
  }
  return (result = a + b);
};
module.exports = { sumTest };
