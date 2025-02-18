# 1

```ts
function subtract(initial, values) {
  let remaining = initial;
  for (const value of values) {
    remaining -= value;
  }
  return "The result is: " + remaining;
}
```

# 2

```ts
function displayInfo(
  name: string,
  age?: number,
  country: string = "USA"
): string {
  return `${name}, ${age ? age : "unknown age"}, from ${country}`;
}

console.log(displayInfo("Alice", 30));
console.log(displayInfo("Bob", undefined, "Canada"));
console.log(displayInfo("Charlie", 25, "UK"));
```

- Line 9 will output `Alice, 30, from USA`
- Line 10 will output `Bob, unknown age, from Canada`
- Line 11 will output `Charlie, 25, from UK`