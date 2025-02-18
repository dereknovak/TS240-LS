# 1

```ts
type Pair<T, U> = {
  first: T;
  second: U;
};

const myPair: Pair<number, string> = {
  first: 42,
  second: "Answer",
};

const yourPair: Pair<number, string> = {
  first: "Another answer",
  second: 42,
};
```

The implementation of `yourPair` is used incorrectly, as `number` is assigned to `T`, which is implemented as a string. Also, `string` is assigned to `U`, which is implemented as a number.

# 2

```ts
type KeyValuePairs<T, U> = {
  key: T;
  values: U[];
};

const myPairs: KeyValuePairs<string, number> = {
  key: "Numbers",
  values: [1, 2, 3, 4, 5],
};

const yourPairs: KeyValuePairs<number, string> = {
  key: 42,
  values: ["One", "Two", 3, "Four"],
};
```

The implementation of `yourPairs` is again used incorrectly, as `string` is assigned to `U`, which will require a type defintion of `string[]`. The array referenced by its property `values`, however, includes a number.