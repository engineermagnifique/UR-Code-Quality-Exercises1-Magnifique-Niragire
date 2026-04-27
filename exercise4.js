function findEvenNumbers(inputNumbers = []) {
  const evenNumbers = [];

  for (const number of inputNumbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}