```ts
function logSum(a: number, b: number): void {
  const sum = a + b;
  console.log("The sum of", a, "and", b, "is", sum);
  return sum;
}

logSum(3, 4);
```

Yes, this will raise an error.

The function specifies a return value of `void`, meaning nothing should be returned; however, the function returns `sum`, which has an implicit type of `number`.