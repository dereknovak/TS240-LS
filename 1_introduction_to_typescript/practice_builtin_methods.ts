const numbersInStringFormat = ['10', '20', '30', '40'];

function convertToNumbers(arr: string[]): number[] {
  return arr.map(str => parseInt(str));
}

console.log(convertToNumbers(numbersInStringFormat));