```ts
let age: number | string = 30;
age = (age as unknown as string).length;
```

This example will not raise any errors, as it first treats `age` as `unknown`, then as `string`, which includes a `length` property. However, `age` itself does not have a value for the `length` property, so `undefined` is ultimately returned and used as `age`'s reassigned value.