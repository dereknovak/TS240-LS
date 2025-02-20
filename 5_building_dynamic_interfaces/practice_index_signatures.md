# 1

```ts
interface User {
  [key: number]: string;
}

const obj: User = {
  1: "Jane",
  2: "30",
  3: "female",
};

console.log(Object.keys(obj).every((key) => typeof key === "number"));
```

The output will be `false`. Although the keys have a type definition of `number`, this is really only relevant during the compile-time. Once transpiled to JavaScript and run, the code will treat all object keys as strings. This is why it is important to be aware of JavaScripts quirks, even while writing in TypeScript.

# 2

```ts
type User = Map<number, string>;

const obj: User = new Map([
  [1, 'Jane'],
  [2, '30'],
  [3, 'female']
]);

console.log(Object.keys(obj).every((key) => typeof key === "number")); // true
```