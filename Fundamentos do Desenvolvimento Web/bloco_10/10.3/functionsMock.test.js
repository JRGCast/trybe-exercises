// 1. Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100 . A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro.

// Devido a ser um problema na exportação do código e no Jest, por hora foram declaradas as funções diretamente no arquivo de testes:
let randomNumber = () => Math.floor(Math.random() * 100);
let isDivisible = (number) => randomNumber() % number === 0;

const { it, expect } = require('@jest/globals');
const functions = require('./functionsMock');

// 2. Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible() .
describe(`tests to files`, () => {
  it(`verify if 'randomNumber' is summoned when 'isDivisible' is called`, () => {
    randomNumber = jest.fn();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
  // 3. Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true .
  it(`verify if when 'randomNumber' is pair and 'isDivisible' parametre is two, returns true`, () => {
    randomNumber = jest.fn().mockImplementation(() => {
      const random = Math.floor(Math.random() * 100);
      let result;
      random % 2 === 0 ? (result = random) : (result = random + 1);
      return result;
    });
    isDivisible = jest
      .fn()
      .mockImplementation((number) => randomNumber() % number === 0);
    console.log(isDivisible(2));
    expect(isDivisible(2)).toReturnWith(true);
  });
  // 4. Simule ( mocke ) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.
  // it(`verify if when randomNumber return known values, isDivisible act as expected`, () => {
  //   isDivisible = jest.fn();
  //   randomNumber = jest
  //     .fn()
  //     .mockReturnValue(10)
  //     .mockReturnValueOnce(30)
  //     .mockReturnValueOnce(20);
  //   isDivisible();
  //   expect(isDivisible).toHaveBeenCalledTimes(1);
  //   expect(randomNumber).toHaveBeenCalledTimes(1);
  //   isDivisible();
  //   expect(isDivisible).toHaveBeenCalledTimes(2);
  //   expect(randomNumber).toHaveBeenCalledTimes(2);
  //   isDivisible();
  //   expect(isDivisible).toHaveBeenCalledTimes(3);
  //   expect(randomNumber).toHaveBeenCalledTimes(3);
  //   isDivisible();
  //   expect(isDivisible).toHaveBeenCalledTimes(4);
  //   expect(randomNumber).toHaveBeenCalledTimes(4);
  // });
});
