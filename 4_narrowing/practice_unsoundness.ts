// 1

function isNumber(value): value is number {
  return typeof value === 'number';
}

let x: any = 'Launch School';
if (isNumber(x)) {
  const y = x;
} else {
  console.log(`'x' is not a number.`);
}

let a: any = 'Launch School';
if (isNumber(a)) {
  const b: number = a as number;
} else {
  console.log(`'a' is not a number.`);
}

// 2

function safeGet<T>(array: Array<T>, index: number): T | undefined {
  if (index >= 0 && array.length > index ) {
    return array[index];
  } else {
    return undefined;
  }
}

const names: string[] = ["John", "Jane"];
const thirdName = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2



