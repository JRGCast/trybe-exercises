const { test, expect } = require('@jest/globals');
const { sumTest } = require('./sumTest');

describe(`tests to 'sumTest' function`, () => {
  test('sums two values', () => {
    expect(sumTest(2, 3)).toBe(5);
  });
  test(`cannot sumTest other than string, so throw error`, () => {
    expect(() => {
      sumTest(2, '3');
    }).toThrow();
    expect(() => {
      sumTest(2, '3');
    }).toThrowError('parameters are not numbers');
  });
});
