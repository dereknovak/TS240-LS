```ts
function concatenate(a, b) {
  return a + b;
}

const result = concatenate("Hello", "World");
const numericResult = concatenate(1, 2);

console.log(result);
console.log(numericResult);
```

The function name is a bit misleading, as while the function *does* concatenate strings, it can also determine the sum of numbers.