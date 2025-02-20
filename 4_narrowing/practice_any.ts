function processInput1(input: any) {
  console.log(input.toUpperCase());
  console.log(input.toFixed(2));
  console.log(input.length);
}

processInput1("hello");
processInput1(42);
processInput1(true);

/* 
There will be no errors. While `toUpperCase` and `length` can only be used by
strings and `toFixed` only by numbers, the `any` type allows any type of value
to be used without throwing any TypeScript compiler errors.
*/

// Fixed Solution

type Input = string | number | { length: number };

function processInput(input: Input) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else if (typeof input === 'number') {
    console.log(input.toFixed(2));
  } else if ('length' in input) {
    console.log(input.length);
  }
}

processInput('hello');
processInput(42);
processInput([1, 2, 3]);