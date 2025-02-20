# 1

```ts
const x: any = "Launch School";
if (typeof x === "string") {
  console.log(x.toUpperCase());
} else {
  console.log(x.toLowerCase());
}
```

```ts
const y: unknown = "Launch School";
if (typeof y === "string") {
  console.log(y.toUpperCase());
} else {
  console.log(y.toLowerCase());
}
```

Only the second example will result in an error.

Although there is a type guard in the first example that pulls away all string types, the `any` keyword simply prevents TypeScript compilation errors from appearing for that value.

With that said, the `unknown` keyword *will* allow all examples of a given type to follow a type guard's logic, essentially sending everything *except* strings to the `else` branch in the second example.

# 2

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userName = userInput;
```

There will be a type error. While the reassignment of `userInput` to `5` occurs without any issues, TypeScript still assumes the value to be of type `unknown`. However, when reassigning its value to `userName`, an error occurs as `userName` is of type `string`, and `unknown` types cannot be assignable to any other types.

# 3

```ts
function processData(data: unknown): string {
  if (typeof data === 'string') {
    return 'Hello, ' + data;
  } else if (typeof data === 'number') {
    return 'Age: ' + data;
  } else {
    throw new Error('Invalid data');
  }
}

// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"
```