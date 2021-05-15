const readline = require('readline-sync');

const name = readline.question('Qual é o seu nome? ');
const age = readline.questionInt('Qual é sua idade? ');

console.log(`Hello, ${name}! Welcome to this app, you are ${age} years old heh?`);
