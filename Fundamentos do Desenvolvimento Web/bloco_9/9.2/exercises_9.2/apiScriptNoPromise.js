const sumRandomNumbers = () => {
  const rndomArr10 = [...new Array(10)].map(
    (element) => (element = Math.floor(Math.random() * 50) + 1),
  );
  const itsOver8000 = rndomArr10
    .map((acc) => acc * acc)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  if (itsOver8000 > 8000) throw new Error();

  return itsOver8000;
};

const randomSum = (sum) => [2, 3, 5, 10].map((number) => sum / number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await randomSum(sum);

    console.log(array);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
