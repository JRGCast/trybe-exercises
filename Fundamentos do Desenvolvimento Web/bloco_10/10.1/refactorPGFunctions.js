// Desafio 1 (refatoração)
const compareTrue = (boolean1, boolean2) => boolean1 && boolean2;
// Ok!

// Desafio 2 (refatoração)
const calcArea = (base, height) => (base * height) / 2;
// Ok!

// Desafio 3 (refatoração)
const splitSentence = (str) => str.split(' ');
// Ok!

// Desafio 4 (refatoração)
const concatName = (array) => [array.pop(), array[0]].join(', ');
// Ok!

// Desafio 5 (refatoração)
const footballPoints = (wins, ties) => wins * 3 + ties;
// Ok!

// Desafio 6 (refatoração)
function highestCount(arrayNumber) {
  let totalLength = [];
  let maiorNumero = [0];
  for (let i1 = 1; i1 < arrayNumber.length; i1 += 1) {
    if (arrayNumber[i1] >= maiorNumero) {
      maiorNumero = arrayNumber[i1];
    }
  }
  for (let i2 = 0; i2 < arrayNumber.length; i2 += 1) {
    if (maiorNumero === arrayNumber[i2]) {
      totalLength.push(arrayNumber[i2]);
    }
  }
  return totalLength.length;
}

// Desafio 7 (refatoração)
const catAndMouse = (mouse, cat1, cat2) => {
  const distCat1 = Math.abs(mouse - cat1);
  const distCat2 = Math.abs(mouse - cat2);
  let result = 'os gatos trombam e o rato foge';
  distCat1 < distCat2 ? (result = 'cat1') : result;
  distCat1 > distCat2 ? (result = 'cat2') : result;
  return result;
};
// Ok!

// Desafio 8 (refatoração)
const fizzBuzz = (array) =>
  array.map((element) => {
    let result = 'bug!';
    const fizzBuzz3n5 = 'fizzBuzz';
    const fizz3 = 'fizz';
    const buzz5 = 'buzz';
    element % 3 === 0 ? (result = fizz3) : result;
    element % 5 === 0 ? (result = buzz5) : result;
    element % 15 === 0 ? (result = fizzBuzz3n5) : result;
    return result;
  });

// Ok!!

// Desafio 9 (refatoração)
const encode = (string) =>
  string
    .replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/o/gi, 4)
    .replace(/u/gi, 5);

// Ok!
const decode = (string) =>
  string
    .replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
// Ok!

// Desafio 10 (refatoração)
function techList(tech, name) {
  let result;
  !tech.length
    ? (result = 'Vazio!')
    : (result = tech.sort().map((element) => ({
        tech: element,
        name,
      })));

  return result;
}
// Ok!.

// Desafio 11 (refatoração)
// Desafio 11 - Função de apoio => checar se o array está com tamanho certo:
function phoneCheckLength(numbers) {
  let phoneLength;
  if (numbers.length !== 11) {
    phoneLength = 'tamanho errado';
  }
  return phoneLength;
}
function phoneCheckQtd(numbers) {
  let phoneNumbers;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      phoneNumbers = 'numeros errados';
    }
  }
  return phoneNumbers;
}

// Desafio 11 - Função de apoio => checar se há 3 ou mais números repetidos:
// Aqui utilizei muita ajuda deste site https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3 , pois nunca teria pensado em utilizar objeto dessa maneira, inclusive ainda não entendo direito o 'if else' funcionando desta forma.
function phoneRepeatCheck(numbers) {
  let repeatCheck = '';
  let repeatCounting = {};
  for (let i = 0; i < numbers.length; i += 1) {
    if (repeatCounting[numbers[i]]) {
      repeatCounting[numbers[i]] += 1;
    } else {
      repeatCounting[numbers[i]] = 1;
    }
  }
  for (let prop in repeatCounting) {
    if (repeatCounting[prop] >= 3) {
      repeatCheck = 'numeros repetidos demais';
    }
  }
  return repeatCheck;
}

function generatePhoneNumber(numbers) {
  let tel;
  if (phoneCheckLength(numbers) === 'tamanho errado') {
    tel = 'Array com tamanho incorreto.';
  } else if (
    phoneCheckQtd(numbers) === 'numeros errados' ||
    phoneRepeatCheck(numbers) === 'numeros repetidos demais'
  ) {
    tel = 'não é possível gerar um número de telefone com esses valores';
  } else {
    numbers.splice(0, 0, '(');
    numbers.splice(3, 0, ')');
    numbers.splice(4, 0, ' ');
    numbers.splice(10, 0, '-');
    tel = numbers.join('');
  }
  return tel;
}

// Ok!
// Desafio 12 (refatoração)
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (
    Math.abs(
      lineA > lineB - lineC && lineB > lineA - lineC && lineC > lineA - lineB,
    )
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
// Ok!

// Desafio 13 (refatoração)
function hydrate(drinks) {
  let drinksNum = drinks.replace(/\D/g, '');
  let drinksArr = drinksNum.split('');
  let numbersArr = [];
  let cups = 0;
  for (let i = 0; i < drinksArr.length; i += 1) {
    numbersArr.push(parseInt(drinksArr[i], 10));
  }
  for (let j = 0; j < numbersArr.length; j += 1) {
    cups += numbersArr[j];
  }
  if (cups === 1) {
    cups = `${cups} copo de água`;
  } else {
    cups = `${cups} copos de água`;
  }
  return cups;
}
// Ok!
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
