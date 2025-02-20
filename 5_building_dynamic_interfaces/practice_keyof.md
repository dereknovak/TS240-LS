```ts
interface Student {
  name: string;
  age: number;
}

let key: keyof Student = "grade";
```

This will create an error, as `'grade'` is not among the keys of interface `Student`. When using the `keyof` operator with an interface, a union type of all keys is returned.