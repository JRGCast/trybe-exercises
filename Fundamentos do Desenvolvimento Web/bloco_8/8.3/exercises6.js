const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  // escreva seu código aqui
  return students.map((student, index) => ({
    name: student,
    average: Number(
      grades[index]
        .reduce(
          (average, currentGrade, rIndex, currArray) =>
            average + currentGrade / currArray.length,
          0,
        )
        // Que também pode ser Number(
        // average: Number(grades[index].reduce((average, currentGrade) => average + currentGrade, 0) / grades[index].length})))
        .toFixed(1),
    ),
  }));
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// Ok!

assert.deepStrictEqual(studentAverage(), expected);
