function findEvenNumbers(inputNumbers = []) {
  return inputNumbers
  .filter((number)=>number%2===0);
}
console.log(findEvenNumbers([2,5,7,6,4,8]));