# 1

```ts
let x: number = 2;
let y: number = 2;
let result: string = x + y;
```

This example will produce an error, as the expression `x + y` evaluates to the number `4`, which is not of type `string`. The resulting error will be shown on `result`.

# 2

```ts
let x: number = 2;
let y: string = "2";
let result: string = x + y;
```

This example will *not* produce as error, as the expression `x + y` evalutates to the string `22`, which is of type `string`. All other explicit type definitions are correct.

# 3

```ts
let x: number = 2;
let y: string = "2";
let result: boolean = x === y;
```

Yes, an error will be thrown. This is because the `===` cannot be used to compare a number and a string, so TypeScript complains. This is an important distinction between JavaScript and TypeScript.

# 4

```ts
let x: boolean = true;
let y: number = 2;
let z: string = "";
let result: boolean = (x && y) || z;
```

An error will be thrown. The expression in the parenthases returns the right operand, `2`, which is then compared against `z`'s empty string. Because a `boolean` is neither a string nor a number (`number | string`), TypeScript complains.

# 5

```ts
let x: undefined;
x = 1;
```

Although `x` is defined as type `undefined`, this is in fact a primitive value and therefore `x` must continue to reference a value of its type, therefore an error is thrown. If the value is unknown, the type `unknown` should be used, instead.
