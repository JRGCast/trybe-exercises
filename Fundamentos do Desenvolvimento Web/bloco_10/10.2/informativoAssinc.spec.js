const sumNumbers = require('./informativoAssinc');
test('Não deveria passar!', (done) => {
  // Sem o done dá falso positivo/falso 'tudo Ok'
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});

test('Testando sumNumbers, soma 5 mais 10', (done) => {
  sumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
});
