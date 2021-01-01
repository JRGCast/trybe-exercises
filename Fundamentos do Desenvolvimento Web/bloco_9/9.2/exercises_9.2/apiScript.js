//const { resolve } = require('path');
//const fetch = require('node-fetch');

// 2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
// 3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
// 4. Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// 5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
}; // O segundo parâmetro( `myObject` ) define o tipo de request( `method: 'GET'` ) e o formato da resposta( `headers: { 'Accept': 'application/json' }` ), como visto nas requisições via `curl`.

const fetchPromise = () => {
  const newPromise = new Promise((resolve, reject) => {
    const rndomArr10 = [...new Array(10)].map(
      (element) => (element = Math.floor(Math.random() * 50)),
    );
    const itsOver8000 = rndomArr10
      .map((acc) => acc * acc)
      .reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      )(itsOver8000 < 8000)
      ? resolve(itsOver8000)
      : reject();
  });
  newPromise
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .then((array) => array.reduce((number, acc) => number + acc, 0))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!'),
    );
};
fetchPromise();
const fetchJoke = () =>
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((responsedJson) => {
      const jokeCont = document.getElementById('jokeContainer');
      jokeCont.innerHTML = responsedJson.joke;
    });

window.onload = function onload() {
  fetchJoke();
};
