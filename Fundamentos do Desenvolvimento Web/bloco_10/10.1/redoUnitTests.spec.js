// Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript , dessa vez utilizando Jest .
const { expect, it } = require('@jest/globals');
const { sum } = require('./redoUnitTests');
describe(`redoing unitTests in jest`, () => {
  it(`should return the result of a+b`, () => {
    expect(sum(1, 2)).toBe(3);
  });
  it(`verify if sum(4,5) returns 9`, () => {
    expect(sum(4, 5)).toBe(9);
  });
  it(`verify if sum(0,0) returns 0`, () => {
    expect(sum(0, 0)).toBe(0);
  });
  it(`verify if it throws error 'parameters mus be numbers' if some string is parameter`, () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
    expect(() => {
      sum(4, '5');
    }).toThrowError('parameters must be numbers');
  });
});
// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
// 2. Teste se o retorno de sum(4, 5) é 9
// 3. Teste se o retorno de sum(0, 0) é 0
// 4. Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// 5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
