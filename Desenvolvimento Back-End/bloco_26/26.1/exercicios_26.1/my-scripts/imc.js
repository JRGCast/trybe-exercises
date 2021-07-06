const readline = require('readline-sync')

console.log("Bem-vindo/a à calculadora de Índice de Massa Corporal - IMC!")

let name = readline.question("Qual é o seu nome? ");
let weight = readline.questionFloat(`Olá ${name}, quanto você pesa em Kg? (Coloque ponto ao invés de vírgula) `, {limit: /\b\d{2,3}\b\.?\b\d{2}\b/} )
let height = readline.questionFloat(`Certo, e qual é sua altura em metros? `)

let imc = (weight/(height**2)).toFixed(2);

console.log(`Bem, ${name}, se você pesa ${weight} e tem ${height}, seu IMC é aproximadamente ${imc}! `)

const health = (imc) => {
  let result
  if(imc < 18.5) {
    result = 'Magreza! Cuidado...'
  } 
  if (imc >= 18.5 && imc<=24.9 ) {
    result = 'Normal! Parabéns!'
  }
  if (imc>24.9 && imc<=29.9) {
    result = 'Sobrepeso! Nada grave, mas vamos moderar?'
  }
  if(imc>29.9 && imc<=39.9) {
    result = 'Obesidade moderada! Cuidado com a saúde!'
  }
  if(imc>39.9) {
    result = 'Obesidade mórbida! Sua saúde está em risco!'
  }
  return result
} 

console.log(`portanto você está na faixa de: ${health(imc)}`)
