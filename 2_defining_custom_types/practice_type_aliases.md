```ts
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age: Age;
};

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const person1: Person = {
  name: "Alice",
  age: 30,
};

const person2: Person = {
  name: 42,
  age: "Bob",
};

console.log(greet(person1));
console.log(greet(person2));
```

This code will produce an error for `person2`, as their `name` property should reference a string type (alias `Name`) and the `age` property should reference a number type (alias `Age`).