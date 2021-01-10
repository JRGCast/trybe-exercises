// Desafio 1
const compareTrue = (boolean1, boolean2) => boolean1 && boolean2;
// Ok!

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;
// Ok!

// Desafio 3
const splitSentence = (sentence) => sentence.split(' ');
// Ok!

// Desafio 4
const concatName = (array) => `${array.pop()}, ${array[0]}`;
// Ok!

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;
// Ok!

// Desafio 6
const highestCount = (array) =>
  array
    .sort((position, b) => b - position)
    .filter((element, index, sortArr) => element === sortArr[0]).length;
// Ok!

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distMouseCat1 = Math.abs(mouse - cat1);
  const distMouseCat2 = Math.abs(mouse - cat2);
  let result = 'os gatos trombam e o rato foge';
  result = distMouseCat1 < distMouseCat2 ? 'cat1' : result;
  result = distMouseCat1 > distMouseCat2 ? 'cat2' : result;
  return result;
}
// Ok!

// Desafio 8
function fizzBuzz(array) {
  return array.map((num) => {
    let position = 'bug!';
    position = num % 3 === 0 ? 'fizz' : position;
    position = num % 5 === 0 ? 'buzz' : position;
    position = num % 15 === 0 ? 'fizzBuzz' : position;
    return position;
  });
}

// Desafio 9

const encode = (string) =>
  string
    .replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/o/gi, 4)
    .replace(/u/gi, 5);

const decode = (string) =>
  string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

// Desafio 10
const techList = (tech, name) => {
  if (!tech.length) return 'Vazio!';
  return tech.sort().map((item) => ({ tech: item, name }));
};

// Desafio 11
const validation = (numbers) => {
  const counts = numbers.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  }, {});
  const checkRepeated = !(Math.max(...Object.values(counts)) >= 3);
  const checkOver9Under0 = !(
    numbers.filter((number) => number > 9 || number < 0).length > 0
  );
  return checkOver9Under0 && checkRepeated;
};

const generatePhoneNumber = (numbers) => {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (!validation(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ] = numbers;
  return `(${one}${two}) ${three}${four}${five}${six}${seven}-${eight}${nine}${ten}${eleven}`;
};

// Desafio 12
const triangleCheck = (lineA, lineB, lineC) =>
  lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);

// Desafio 13
function hydrate(ticket) {
  const split = ticket.split('');
  let cupOfWater = 0;
  split.forEach((letter) => {
    const number = parseInt(letter, 10);
    if (!isNaN(number)) {
      cupOfWater += number;
    }
  });
  if (cupOfWater === 1) return '1 copo de água';
  return `${cupOfWater} copos de água`;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
};
