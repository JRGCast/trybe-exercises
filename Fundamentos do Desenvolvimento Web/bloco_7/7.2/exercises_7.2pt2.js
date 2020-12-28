const { KeyObject } = require('crypto');

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função lessona adicionar o turno da manhã na lesson2 . Essa função deve possuir três lessonâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addMorningTurn = (obj, key, value) => (obj[key] = value);
addMorningTurn(lesson2, 'turno', 'manhã');

// 2. Crie uma função lessona listar as keys de um objeto. Essa função deve receber um objeto como lessonâmetro. // 3. Crie uma função lessona mostrar o tamanho de um objeto. // 4. Crie uma função lessona listar os valores de um objeto. Essa função deve receber um objeto como lessonâmetro.
const listEverything = (obj) =>
  `O objeto ${JSON.stringify(obj)}, tem as chaves/propriedades [${Object.keys(
    obj,
  )}], valores [${Object.values(obj)}], e seu tamanho é de [${
    Object.keys(obj).length
  }] propriedades.`;

// 5. Crie um objeto de nome allLessons , que deve agrulesson todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons):
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// tentar fazer depois com função!

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// Forma direta:
const totalStudents = (lesson) =>
  Object.values(lesson).reduce(
    (total, item) => (total += item.numeroEstudantes),
    0,
  );
// ok!

// Variação divertida:
const allItems = (obj) =>
  `${Object.values(obj)
    .map(
      (item) =>
        `Número de estudantes em ${JSON.stringify(
          item.materia,
        )} é de ${JSON.stringify(item.numeroEstudantes)}`,
    )
    .join(', ')}. Portanto, o total é: ${Object.values(obj).reduce(
    (total, item) => (total += item.numeroEstudantes),
    0,
  )}.`;

// ok!

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (object, position = 0) =>
  `Os valores do objeto passado são: [${Object.values(
    object,
  )}], portanto, na posição [${position}], temos [${
    Object.values(object)[position]
  }].`;
// OK!
//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 8. Crie uma função que verifique se o lesson (chave / valor) existe na função. Essa função deve possuir três lessonâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (object, key, value) => {
  Object.entries(object).forEach((element) => {
    element[0] === key && element[1] === value
      ? (result = true)
      : (result = false);
  });
  return result;
};
//console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Bônus
// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const howManyStudents = (obj, aula) => {
  let result1 = [];
  const values = Object.values(obj);
  values.forEach((element) => {
    element.materia === aula ? result1.push(element.numeroEstudantes) : false;
  });
  return `Há ${result1.reduce(
    (acc, curr) => (acc += curr),
    0,
  )} alunos matriculados em ${aula}.`;
};
// ok!

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (lessons, teacher) => {
  const arrStudents = [];
  const classes = [];
  const journal = Object.values(lessons);
  const extractJournal = journal
    .filter((element) => element.professor === teacher)
    .forEach((element) => {
      arrStudents.push(element.numeroEstudantes);
      classes.push(element.materia);
    });
  return {
    professor: teacher,
    aulas: classes,
    estudantes: arrStudents.reduce((total, students) => {
      if (typeof students === 'number') {
        return (total += students);
      }
    }, 0),
  };
};
console.log(createReport(allLessons, 'Maria Clara'));
// qualquer dia tentar refatorar isso;
//  {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// }
