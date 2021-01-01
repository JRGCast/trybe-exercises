// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.
// Uma função recursiva é uma função que 'chama' a si própria!!
const factorial = (number) => (number > 1) ? (number * factorial(number-1)) : 1;
// OK!

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (string) => string.split(' ').reduce((longest, currentValue) => {
   if(longest.length < currentValue.length) {
     return currentValue
   } else {
     return longest
   } 
   }, '');

// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
// OK!

// 3. => exercises_7.2_pt2.3.html Ok!!

// 4. Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const skills = ['perseverante', 'comunicativo', 'prático', 'objetivo', 'charmoso']
const alterate = (reception) => {
  const inside = (inner) => `Olá ${inner}, diabo de exercício chato`;
 let result = `${inside(reception)}
 Minhas cinco principais habilidades são:`
    skills.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `
    return result
 }
 console.log(alterate('lel'))

 // Ok!
 // Variação divertida: 
 const alterate2 = (reception) => reception.split('').map((par) => {
  return par.replace(/x/gi, 'xablowsky')
 }).join('');
  
 console.log(alterate2('OLÁ MUNDOX X XAN'))

 // Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
