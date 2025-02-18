# 1

```ts
let text: string;
text = 123;
```

This will result in a type error, as the code can run but the typing is wrong. `text` can only be assigned string values.

# 2

```ts
let x: number = 10;
let y: number = 5;
let result = x + y;
```

This will run without any issue. Both `x` and `y` are explicitly typed with `number`, and `result` is implicitly typed with `number` due to the returned sum of `x` and `y`.

# 3

```ts
function greet(name: string): string {
  return "Hello, " name;
}
```

This code will throw a syntax error due to the `+` missing from line 2.