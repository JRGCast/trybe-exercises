const simpleSum = require('./sum');

test('sums two values', () => {
  expect(simpleSum(2, 3)).toEqual(5);
});
