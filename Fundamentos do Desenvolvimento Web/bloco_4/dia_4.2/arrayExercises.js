let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Imprimir cada posição do array:
// for(let i=0; i<numbers.length; i++) {
//     console.log(numbers[i])

// }

//2. Imprimir cada posição do array somada com a próxima:
// let resultado = 0;
// for(let i=0; i<numbers.length; i++){
//     resultado += numbers[i]
// }

// console.log(resultado)

//3. Imprimir a média aritmética do array; 4. Com o mesmo código, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let resultado = 0;
// for(let i=0; i<numbers.length; i++){
//     resultado += numbers[i]
// }
// let media = resultado/numbers.length 

// console.log(media);
// if(media>20){
//     console.log("Valor de "+ media + " é maior que 20.")
// } else {
//     console.log("Valor de " + media + " é menor ou igual a 20.")
// }


// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o:
// let maiorNumero = 0;
// for(let i = 0; i<numbers.length; i++) {
//     if(numbers[i] > maiorNumero) {
//         maiorNumero = numbers[i]
//     }
// }

// console.log(maiorNumero);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let maiorNumero = 0;
// for(let i = 0; i<numbers.length; i++) {
// if(numbers[i] > maiorNumero) {
// maiorNumero = numbers[i]
// }
// }

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o:
let maiorNumero = 0;
for(let i = 0; i<numbers.length; i++) {
    if(numbers[i] > maiorNumero) {
        maiorNumero = numbers[i]
    }
}

console.log(maiorNumero);

// 8. Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.