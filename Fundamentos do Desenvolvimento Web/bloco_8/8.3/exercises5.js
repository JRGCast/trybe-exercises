// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const aceArray = names.reduce((accumulator, currentValue) => {
    let joinEverything = accumulator + currentValue;
    let theAces = joinEverything.replace(/[^a]/gi, '');
    return theAces.split('');
  }, '');
  return aceArray.length;
}
// OK!

assert.deepStrictEqual(containsA(), 20);
