# 1

```ts
let arr: string[] = ["hello", "world"];
arr.push(5);
```

This will raise an error, as `arr` has a type defintion of `string[]`, which means only string elements can exist within it.

# 2

```ts
let tuple: [number, number] = [1, 2];
tuple.push("3");
```

This will raise an error as `'3'` is not of type `number` which is required for the tuple. With that said, using `push` with a tuple is considered bad practice as appending a number would not have created an error, despite tuples having a fixed length.

# 3

```ts
let tuple: [number, number] = [1, 2];
tuple.push(3);
```

This will *not* raise an error, despite the length of the tuple getting modified. This is because the value is of type `number`, which is the only type allowed within the tuple.

# 4

```ts
let tuple: [number, string] = [1, "2"];
tuple[0] = "1";
```

This will raise an error, as the type defintion of `tuple[0]` must be a number.

# 5

```ts
const myArray = ["is", "launch school", "awesome", true, "or", false];
```

You could provide 2 different definitions, depending on whether you want an array or a tuple.

- Tuple: `[string, string, string, boolean, string, boolean]`
- Array: `(string | boolean)[]` or `Array<string | boolean>`