```ts
function myFunc({ }: string[]): number {
  return;
}
```

In order to match the returned `number` type, we can evaluate the `length` property of the string array passed into the function.