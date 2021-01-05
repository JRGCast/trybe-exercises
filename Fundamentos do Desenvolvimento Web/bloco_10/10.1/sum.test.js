const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const plusOneSqr = Math.pow(sq + 1, 2);
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

console.log(findNextSquare(121));
