//Lembre-se que a mensagem do erro aparece apenas quando o teste falha . Experimente alterar os parâmetros de entrada da função add e veja o resultado!
const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual ao NÚMERO três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==) 

// É possível também testar estruturas como arrays e objetos (assert já declarado lá em cima):

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

// Um papel dos testes unitários é nos ajudar a implementar funções mais robustas. Veja, por exemplo, a função que realiza a divisão:

function division(x, y) {
  return x / y;
}

// Vamos aos testes: 

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣

// O primeiro assert.strictEqual funciona e não apresenta erro, mas o segundo deixa evidente uma fragilidade na implementação da função division , pois não poderia ser possível realizar a divisão por 0. Nesse caso, devemos melhorar a implementação da função division , a fim de não termos mais esse estado inconsistente.

function divisionFixed(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(divisionFixed(10, 2), 5); // OK
assert.throws(() => { divisionFixed(10, 0); }, 'Error: parameter y must not be 0'); // OK