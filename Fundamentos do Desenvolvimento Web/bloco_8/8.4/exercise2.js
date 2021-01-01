// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
//Dica: use o parâmetro rest.
const assert = require('assert');
//escreva sum abaixo
const sum = (...args) =>
  args.reduce((acumulator, currentValue) => acumulator + currentValue, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
// Ok!

// console.log(`Relembrando: o reduce funciona assim:
// x.reduce((accumulator, currentValue, currentIndex, array))
//     1º Parâmetro = ${accumulator} é como se fosse uma variável alheia que faz += à

//     2º Parâmetro = ${currentValue} que é atual posição do array, na

//     3º Parâmetro= ${currentIndex}, que é o número da 'repassada' atual no
//     4º Parâmetro [${array}], que é o array de onde parte a função`);
