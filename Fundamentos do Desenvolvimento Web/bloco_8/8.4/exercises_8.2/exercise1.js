// 1 Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for (rectangle of rectangles) {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
}

// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
//Dica: use o parâmetro rest.
const sum = (...args) => {
  return args.reduce((acumulator, currentValue, currentIndex, array) => {
    console.log(`o reduce funciona assim:
    
    1º Parâmetro = ${acumulator} é como se fosse uma variável alheia que faz += à
    
    2º Parâmetro = ${currentValue} que é atual posição do array, na 
    
    3º Parâmetro= ${currentIndex}, que é o número da 'repassada' atual no 
    4º Parâmetro [${array}], que é o array de onde parte a função`);
    return acumulator + currentValue;
  });
};

console.log(sum(4, 7, 8, 9, 60, 120, 200));
// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

// Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// Dica: use object destructuring.
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) =>
  `${name} is ${age} years old and likes ${likes.join(', ')}.`;
assert.strictEqual(
  personLikes(alex),
  'Alex is 26 years old and likes fly fishing.',
);
assert.strictEqual(
  personLikes(gunnar),
  'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.',
);

// 4. Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
// escreva filterPeople abaixo

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], {
  name: 'Nicole',
  bornIn: 1992,
  nationality: 'Australian',
});
assert.deepStrictEqual(filteredPeople[1], {
  name: 'Toby',
  bornIn: 1901,
  nationality: 'Australian',
});

// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a];
const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

module.exports = exercise1.js;
