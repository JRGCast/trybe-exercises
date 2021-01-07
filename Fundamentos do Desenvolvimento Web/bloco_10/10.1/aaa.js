const SumNumbers = async (a, b, callback) => {
  return await setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

console.log(
  SumNumbers(5, 3, function (result) {
    result + 1;
  }),
);
