// Agora vamos usar o forEach , para realizar a tabuada do 2. Veja o exemplo abaixo:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Agora estamos tratando de uma HOF , sendo assim é possível se utilizar também dos demais parâmetros para se resolver um problema. Como se pode fazer isso? Veja este exemplo abaixo com o uso de index no forEach :

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
