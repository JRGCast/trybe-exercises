const math = require('./moduleMocks');
jest.mock('./moduleMocks');

test('#somar', () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

// No exemplo acima, utilizamos também o método toHaveBeenCalledWith(...args) , que valida quais parâmetros foram passados para a função. Assim como o mockReturnValueOnce , podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce .
