# 1

```ts
let numbers: Array<number> = [1, 2, 3];
```

Valid

# 2

```ts
let strings: string[] = ['apple', 'banana', 'cherry'];
```

Valid, though this is not a generic array

# 3

```ts
let bools: boolean[[]] = [true, false, true];
```

Invalid, the booleans should be nested.

# 4

```ts
type FruitNames = "apple" | "banana" | "cherry";
const fruits: Array<FruitNames> = ["apple", "banana", "mango"];
```

Invalid, `'mango'` is not of type `'apple' | 'banana' | 'cherry'`.