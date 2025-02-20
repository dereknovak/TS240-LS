# 1

```ts
type Point = { x: number };
type Point = { y: number };

const point: Point = { x: 1, y: 2 };
```

This will cause an error, as type aliases do not support declaration merging.

# 2

```ts
interface UserInterface {
  name: string;
  email: string;
}

type UserType = {
  name: string;
  email: string;
};

function greetUser(user: UserType) {
  return `Hello, ${user.name}`;
}

const user: UserInterface = {
  name: "Alice",
  email: "alice@example.com",
};

console.log(greetUser(user));
```

This will not cause an error. While the two syntaxes are different (`interface` vs `type`), but ultimately create the same *shape*, which is all TypeScript cares about when checking types.