// test('Não deveria passar!', (done) => {
//   // Sem o done dá falso positivo/falso 'tudo Ok'
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando SumNumbers, soma 5 mais 10', (done) => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
});
