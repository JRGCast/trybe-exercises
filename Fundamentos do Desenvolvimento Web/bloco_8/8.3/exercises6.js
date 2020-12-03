const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const average = notes.reduce((acc, currentValue, index) => {
  console.log(
    currentValue.reduce((acc, currentValue, index) => {
      return acc + currentValue;
    }, 0) / currentValue.length,
  );
}, []);

console.log(average);

console.log((9 + 8 + 10 + 7 + 5) / 5);
