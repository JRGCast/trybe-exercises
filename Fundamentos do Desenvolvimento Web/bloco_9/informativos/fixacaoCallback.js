// 1. No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

const assert = require('assert');

const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const getUser = callback => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };
  return callback(userToReturn);
};

assert.strictEqual(getUser(userFullName), 'Hello! My name is Ivan Ivanovich'); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), 'Ivan is Russian'); // complete a chamada da função de getUser

// No código abaixo você tem a função getUser modificada para getUserAssinc, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const getUserAssinc = callback => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };
    console.log(callback(user));
  }, delay());
};

setTimeout(() => getUserAssinc(userFullName), 1000); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUserAssinc(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
