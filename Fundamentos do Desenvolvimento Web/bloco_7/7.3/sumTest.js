const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(typeof sum, 'function')
const expected = sum(4, 4);
assert.strictEqual(expected, 8, '4 + 4 = 8!')
assert.strictEqual(sum(4,8), 8, '4 + 4 é igual a 8!')

assert.throws(() => {
sum(4,'5')
})