# 1

```ts
type Fruit = {
  name: string;
  color: string;
};

type Apple = {
  name: string;
  color: string;
  variety: string;
};

function describeFruit(fruit: Fruit): string {
  return `${fruit.name} is a ${fruit.color} fruit.`;
}

const goldenDelicious: Apple = {
  name: "Golden Delicious",
  color: "yellow",
  variety: "apple",
};

console.log(describeFruit(goldenDelicious));
```

This will not raise an error, as `goldenDelicious` meets the minimum required properties in order to be used within the `describeFruit` function.

# 2

```ts
type Alien = { name: string; planet: string; age: number };
type Human = { name: string; country: string; age: number };

const et: Alien = { name: "E.T.", planet: "Unknown", age: 120 };
const john: Human = et;
```

There will be an error for `john`, as his type definition is `Human` which requires the property `country`. The `et` object does not have this property, and therefore TypeScript complains.

# 3

```ts
type Shape = { color: string; sides: number };
type Square = { color: string; sides: number; sideLength: number };

const redSquare: Square = { color: "red", sides: 4, sideLength: 5 };
const shape: Shape = redSquare;

console.log(shape.sideLength);
```

This example includes a type error for `shape` on line 7, as `shape` is of type `Shape`, which does not include a `sideLength` property. This is a bit confusing, though, as `shape` *does* have that property, so its value of `5` will be logged at run-time; however, TypeScript does not recognize it during compile-time.