```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<addNumbers>;
type AddNumbersReturnType = ReturnType<addNumbers>;

type AddNumbersFunction = (args: AddNumbersParams) => AddNumbersReturnType;
```

An error will be shown on lines 5 and 6 as both `Parameters` and `ReturnType` can only accept a *function's type* as an argument - in this case, they are being passed the function itself. To fix this, simply include `typeof` before the function name to return its type.

Because the returned value of `Parameters` is a tuple of the types, they must be spread to account for the 2 different parameters rather than one single array.

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers>;
type AddNumbersReturnType = ReturnType<typeof addNumbers>;

type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;
```