let { somar, subtrair, multiplicar, dividir } = require('./fixar');

describe(`testes para as funções do módulo fixar`, () => {
  describe(`1. Faça o mock da funcão subtrair e teste sua chamada.`, () => {
    it(`mock and verify if 'subtrair' is called`, () => {
      subtrair = jest.fn();
      subtrair();
      expect(subtrair).toHaveBeenCalled();
      expect(subtrair).toHaveBeenCalledTimes(1);
    });
  });
  describe(`2. Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.`, () => {
    it(`mock return value and verify if 'multiplicar' returns the mockedReturn value '10'`, () => {
      multiplicar = jest.fn().mockReturnValue(10);
      multiplicar();
      expect(multiplicar).toHaveBeenCalled();
      expect(multiplicar).toHaveBeenCalledTimes(1);
      expect(multiplicar).toHaveReturnedWith(10);
    });
  });
  describe(`3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.`, () => {
    it(`mock return value and verify if 'multiplicar' returns the mockedReturn value '10'`, () => {
      somar = jest.fn().mockImplementation((a, b) => a + b);
      console.log(somar);
      expect(somar._isMockFunction).toBe(true);
      expect(somar(1, 3)).toHaveReturnedWith(4);
      expect(somar).toHaveBeenCalled();
      expect(somar).toHaveBeenCalledTimes(1);
    });
  });
});

// 3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
// 4. Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// 5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
