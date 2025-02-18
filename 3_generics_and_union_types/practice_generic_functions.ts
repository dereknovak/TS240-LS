function pair<T>(a: T, b: T): T[] {
  return [a, b];
}

const pairOfNumbers = pair(1, 2);
const pairOfStrings = pair('hello', 'world');

console.log(pairOfNumbers);
console.log(pairOfStrings);