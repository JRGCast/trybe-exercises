const { test, expect } = require('@jest/globals');
const sum = require('./refactorUnitTests.js');

describe(`tests to the function 'sum'`, () => {
  test(`Requisito 1: A função sum(a, b) retorna a soma do parâmetro a com o b, 1+1=2`, () => {
    expect(sum(1, 1)).toBe(2);
  });

  test(`Requisito 2: Testa se o retorno de sum(4, 5) é 9`, () => {
    expect(sum(4, 5)).toBe(9);
  });

  test(`Requisito 3: Testa se o retorno de sum(0, 0) é 0`, () => {
    expect(sum(0, 0)).toBe(0);
  });

  test(`Requisito 4: Testa se a função sum lança um erro quando os parametros são 4 e "5" (string 5)`, () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError();
  });

  test(`Requisito 5: Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") `, () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError('parameters must be numbers');
  });
});
