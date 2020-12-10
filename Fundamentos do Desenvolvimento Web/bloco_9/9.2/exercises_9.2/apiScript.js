const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
}; // O segundo parâmetro( `myObject` ) define o tipo de request( `method: 'GET'` ) e o formato da resposta( `headers: { 'Accept': 'application/json' }` ), como visto nas requisições via `curl`.

const rndomArr10Sqr = [...new Array(10)] // solução encontrada em https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
  .map(element => (element = Math.floor(Math.random() * 50)))
  .map(acc => acc * acc)
  .reduce((acc, currentValue) => acc + currentValue);

const isItOver8000 = arr => {
  const result =
    arr < 8000 ? `${arr} isn't over 8000...` : `${arr} IS OVER 8000!`;
  return result;
};

console.log(isItOver8000(rndomArr10Sqr));
//console.log(rndomArr10Sqr);

const fetchJoke = () => {
  // Adicionar lógica aqui!
  return new Promise((resolve, reject) => {
    if (API_URL) {
      return fetch(API_URL, myObject)
        .then(result => result.json())
        .then(data => {
          console.log(data);
          resolve(data);
        });
    } else {
      throw new Error(reject(alert('Deu erro amigão!')));
    }
  });
};

window.onload = () => fetchJoke();
