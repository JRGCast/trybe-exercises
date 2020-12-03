// Você certamente já acessou um valor de uma posição do array da seguinte forma:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const ffirstCountry = arrayCountries[0];
const fsecondCountry = arrayCountries[1];
const fthirdCountry = arrayCountries[2];
const ffourthCountry = arrayCountries[3];

console.log(ffirstCountry); // Brazil
console.log(fsecondCountry); // Japan
console.log(fthirdCountry); // China
console.log(ffourthCountry); // Canada
console.log('-------------------------------------------------------');

// Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:

const [
  firstCountry,
  secondCountry,
  thirdCountry,
  fourthCountry,
] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
