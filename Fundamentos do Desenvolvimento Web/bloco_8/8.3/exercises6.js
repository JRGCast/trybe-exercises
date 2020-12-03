// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1. Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Ok!

// 2 Crie uma string com os nomes de todas as pessoas autoras.
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// function allNames() {
//   const names = books.reduce((accumulator, currentValue, index, arr) => {
//     if (index === arr.length - 1) {
//       return `${accumulator} ${currentValue.author.name}.`;
//     }
//     return `${accumulator} ${currentValue.author.name},`;
//   }, '');
//   return `Nomes:${names}`; // escreva seu código aqui
// }

// assert.deepStrictEqual(
//   allNames(),
//   'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.',
// );
// Ok!

// 3. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

// function averageAge() {
//   // escreva seu código aqui
//   const age = books.reduce((accumulator, currentValue) => {
//     return (
//       accumulator + (currentValue.releaseYear - currentValue.author.birthYear)
//     );
//   }, 0);
//   return age / books.length;
// }

// assert.strictEqual(averageAge(), expectedResult);

// 4. Encontre o livro com o maior nome.

const expectedLongestResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  const longest = books.reduce((accumulator, currentValue, index) => {
    if (currentValue.name.length > accumulator.name.length) {
      return currentValue.name;
    }
    return accumulator;
  });
  return longest;
}

assert.deepStrictEqual(longestNamedBook(), expectedLongestResult);
