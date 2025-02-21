```ts
interface User {
  name: string;
  email: string;
  age: number;
}

type NameOnly = Pick<User, "name1">;
type WithoutName = Omit<User, "name1">;
```

Only line 7 will show an error.

This is error is due to the fact that `"name1"` is not a valid key from the interface `User` and therefore cannot be picked. On line 8, no error is thrown as ommitting a key that is not present simply has no effect on the typing of `WithoutName`.