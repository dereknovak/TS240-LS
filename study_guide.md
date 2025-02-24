# TS249 'Introduction to TypeScript' Study Guide

# Navigation

- [TypeScript Compiler](#typescript-compiler)
- [Primitive Types](#primitive-types)
    - [Type Annotation](#type-annotation)
    - [Type Inference](#type-inference)
    - [Explicit Typing](#explicit-typing)
- [Complex Types](#complex-types)
    - [Union Types](#union-types)
    - [Literal Types](#literal-types)
    - [Arrays](#arrays)
- [Special Types](#special-types)
    - [any](#any)
    - [unknown](#unknown)
    - [never]
- [Narrowing]
    - [Type Guard](#type-guards)
- [Type Aliases](#type-aliases)
- [Object Types](#object-types)
    - [Type Annotation](#type-annotation-1)
    - [Type Alias](#type-alias)
        - [Type Intersection](#type-intersection)
    - [Interface](#interface)
        - [extends](#extends)
- [Structural Typing](#structural-typing)
    - [Shape]
- [Functions](#functions)
    - [Parameters](#parameters)
        - [Optional Parameters](#optional-parameters)
        - [Default Parameters](#default-parameters)
    - [Return Value](#return-value)
- [Interfaces]
    - [implements]?
- [Type Assertions]
- [Widening and Narrowing]
- [Index Signatures](#index-signatures)
- [Generics](#generics)
    - [keyof](#keyof)
    - [Generic Constraints](#generic-constraints)
- [Utility Types](#utility-types)
    - [Pick](#pick)
    - [Omit](#omit)
    - [ReturnType](#returntype)
    - [Parameters](#parameters)
- [Updating or Extending]

# Study Guide Bullet Points

- The differences between build time and runtime
- Primitive and complex types
- Typing an object’s properties
- Special types: any, unknown, and never
- Typing function parameters and return values
- Structural typing and assignment
- Interfaces
- Type assertions
- Type widening and narrowing
- Index signatures
- Utility types
- Generics
- Updating or extending types

# TypeScript Compiler

# Primitive Types

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

## Type Annotation

- The usage of a type, along with `:` to explicitly determine a value's type.

```ts
let greeting: string = 'Hello, world';
let age: number = 42;
let isOn: boolean = true;
```

## Type Inference
https://launchschool.com/lessons/525da66e/assignments/c73e2a10
https://launchschool.com/lessons/525da66e/assignments/d573a840

- "Type inference is a feature in TypeScript that allows the compiler to automatically deduce the types of variables, function parameters, and function return values when they are not explicitly specified."
- "Type inference is when TypeScript infers the data type of a variable based on its initial value and its static analysis of the code paths, including the structure of the code and the context in which a value is used."
- TypeScript will usually attempt to *infer* a value's type. To default a type to `any`, simply declare the variable without an assignment.

```ts
let name: string = 'Derek';
// Same as
let name = 'Derek';

name = 'Bob';  // Valid
name = 42;     // TSError
```

- Functions cannot utilize type inference and default to `any`.
    - This is due to compile-time only running type checks, while the actual values passed into a function are only known at runtime.

```ts
function log(value): void {  // value: any
  console.log(value);
}
```

## Explicit Typing
https://launchschool.com/lessons/525da66e/assignments/d573a840

- "Explicit typing is when you explicitly specify the type of a variable"
- Use type annotation to explictly type a variable.

# Complex Types

## Union Types
https://launchschool.com/lessons/cc0e9f36/assignments/42f54844

- Each type is called a 'member'
- Any property/method called must be valid on *every* member, unless narrowing occurs
    - To narrow this, you can use `in` ( `if ("property" in obj) {` )
        - Returns `true` if property exists on object or prototype chain

```ts
let id: string | number;

id = 21;    // Valid
id = '21';  // Valid
```

### Narrow Type

- "A narrow type is more specific and represents a smaller set of possible values"

### Wide Type

- "A wide type is more general and represents a larger set of possible values."

```ts
let value1: string;  // Narrow
let value2: string | number | boolean;  // Wide
```

## Literal Types
https://launchschool.com/lessons/525da66e/assignments/4007c99e

- "Literal types are a way to describe specific values that a variable can have."

```ts
let direction: 'North' | 'South' | 'East' | 'West';

direction = 'North';      // Valid
direction = 'Southwest';  // Invalid
```

## Arrays

- (Internal Type)[]
    - `Internal Type` => Represents the contents of array
    - `[]` => The left type is incased within structure
- Can continue to stack
    - Move from left to right
    - `string[][][]`
        - Strings are incased in an array, incased in an array, incased in an array
        - `[[['a', 'b', 'c'], ['1', '2', '3']]]`

```ts
let numbers: number[] = [1, 2, 3, 4, 5];

numbers = [3, 3, 3];        // Valid
numbers = ['1', '2', '3'];  // TypeError: Type 'string' is not assignable to type 'number'.
```

```ts
let nestedNumbers: number[][];

nestedNumbers = [[1, 2], [3, 4], [5, 6]];  // Valid
nestedNumbers = [1, [2, 3], 4, [5]];       // TSError: Type 'number' is not assignable to type 'number[]'.
```

# Special Types

## any
https://launchschool.com/lessons/edc1804c/assignments/23a5d21c

- "Using `any` essentially turns off type checking for a given value or assignment."
- When declaring a variable without initialization and type annotation, the variable defaults to `any`.

```ts
let name: any;

name = 'Derek';  // Valid
name = 22;       // Valid
name.length;     // Valid, but will throw an exception at runtime
```

## unknown
https://launchschool.com/lessons/edc1804c/assignments/bafd77a3

- The `unknown` type is a *safer* version of `any`.
    1. They cannot be assigned to any other type
    2. You cannot invoke any properties on it
    3. You can use type guards to determine its type

- Variables can be reassigned to any value, but you can't do anything with it.

```ts
let data: unknown;

data = 'Some data';  // Valid
data = 404;          // Valid
data.toFixed(2);     // TSError: 'data' is of type 'unknown'.
```

### Checking null

- When checking for an object, `null` must be checked as well.

```ts
function isObject(obj: unknown): void {
  if (typeof obj === 'object') {             // add `&& obj !== null`
    console.log(`It's an object literal!`);
  }
}

isObject({ name: 'Derek' });  // Valid
isObject(null);               // Valid, but will have unexpected results
```

### Type Assertion Bridge

- When using a type assertion, `unknown` can be used to bridge two types together
- `unknown` can be coerced to any type, and any type can be asserted to `unknown`

```ts
let magicNumber: number = 42;
(magicNumber as unknown as string).toUpperCase();  // Valid, but will result in an error at runtime
```

# Narrowing
https://launchschool.com/lessons/edc1804c/assignments/c4c9b02e

- "This process of refining a value from a larger set of possible types to a smaller set of possible types (or a single type) is called narrowing."


## Type Guards

### typeof

```ts
function makeBig(value: string | boolean | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'boolean') {
    return 'BIG BOOLEAN';
  } else {
    return value * 1000;
  }
}

console.log(makeBig('hello, world'));
console.log(makeBig(true));
console.log(makeBig(22));
```

### in

```ts
interface Cat {
  meow(): void;
}

interface Dog {
  woof(): void;
}

function speak(obj: Cat | Dog): void {
  if ('meow' in obj) {
    obj.meow();
  } else {
    obj.woof();
  }
}

const cat: Cat = { meow: () => console.log('Meow!') };
const dog: Dog = { woof: () => console.log('Woof!') };

speak(cat);
speak(dog);
```

### Truthiness

### instanceof

# Type Aliases
https://launchschool.com/lessons/e46f5e6c/assignments/1c5b6872

- "Type aliases enable developers to define new custom types, based on existing types."

```ts
type PrimaryColor = 'red' | 'yellow' | 'blue';
type SecondaryColor = 'orange' | 'green' | 'purple';

type Color = PrimaryColor | SecondaryColor;
```

# Object Types

## Type Annotation

```ts
const clarinet: {
  make: string;
  model: string;
  play(): void;  
} = {
  make: 'Buffet Crampon',
  model: 'R13 Prestige',
  play: () => console.log('Squeak!'),
};
```

## Type Alias

```ts
type Clarinet = {
  make: string;
  model: string;
  play(): void;
};
```

### Type Intersection
https://launchschool.com/lessons/18156389/assignments/8ecb0087

- "Type intersections allow you to combine multiple types into a single type."
- Typically used with objects, as other types have rare use-cases

```ts
type User = { name: string } & { age: number };

const user1: User = {
  name: 'Timothy',
  age: 33,
}
```

- Can be used to inhert the properties from a parent object.

```ts
type Clarinet = {
  make: string;
  model: string;
  play(): void;
};

type EbClarinet = Clarinet & {
  key: string;
}

const efer: EbClarinet = {
  make: 'Buffet Crampon',
  model: 'R13 Prestige',
  key: 'Eb',
  play: () => console.log('Squeak!'),
};
```

## Interface

- Interfaces are used to establish the shape of an object.

```ts
interface Clarinet {
  make: string;
  model: string;
  play(): void;
}
```

### extends
https://launchschool.com/lessons/18156389/assignments/8e25c4ce

- Allows a new interface to be made that inherits members from another interface
- You can extend from a type alias
- If multiple inheriters, separate with a comma
    - `interface Child extends Parent1, Parent2 {`

```ts
type Clarinet = {
  make: string;
  model: string;
  play(): void;
};

interface EbClarinet extends Clarinet {
  key: string
}

const efer: EbClarinet = {
  make: 'Buffet Crampon',
  model: 'R13 Prestige',
  key: 'Eb',
  play: () => console.log('Squeak!'),
};
```

# Structural Typing
https://launchschool.com/lessons/e46f5e6c/assignments/1b314913

- "This means that when the compiler compares two types to determine whether they are compatible, it only looks at the shape of the data -- their properties and the types of those properties -- rather than comparing the names of the types."
- TypeScript only cares about the *shape* of the data being compared, not the name.
    - Even though the type *name* might be different, if the type itself matches, then TypeScript doesn't complain.
- When comparing variables references, the argument may have more properties than required
    - TypeScript will not recognize additional properties as valid ones, so they cannot be called.
- An object literal must *completely match* the shape of the variable's type.

```ts
let personA = { name: 'Derek', age: 31 };
let personB: { name: string } = personA;  // Valid

personB.age;  // TSError!
let personC: { name: string } = { name: 'Bob', age: 22 };  // TSError!
```

## Shape
https://launchschool.com/lessons/e46f5e6c/assignments/c8536259

- "The "shape" of an object refers to the structure of its properties and their types. When we talk about the shape of an object, we are referring to the names and types of the object's properties."
- The **shape** of an object represents the structure of all its properties and their respective types.

# Functions

## Parameters

```ts
function add(a: number, b: number) {
  return a + b;
}

add(2, 5);      // Valid, returns 7
add('a', 'b');  // // TSError: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Optional Parameters

- The `?` operator can be used to allow for *optional parameter*. Because optional parameters default to a value of `undefined`, an error would be thrown as this type is likely unintended. Using `?` prevents an error from being thrown due to this discrepency.

- Note: `undefined` can still be passed as an argument using this syntax.

```ts
function greet(person?: string) {
  console.log(`Hello, ${person || 'stranger'}!`);
}

greet();          // Hello, stranger!
greet('friend');  // Hello, friend!
greet(42);        // TSError: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Default Parameters

- An *implicit* type is set using the default parameter's value type.
    - `name = 'friend'` => `name: string`

```ts
function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting}, ${name}!`);
}

greet();                  // Hello, friend!
greet('Wassup');          // Wassup, friend!
greet('Morning', 'Bob');  // Morning, Bob!
greet(42, 'Steve');       // TSError: Argument of type 'number' is not assignable to parameter of type 'string'.
```

## Return Value

- By default, all functions have a return type of `void`.

```ts
function add(a: any, b: any): number {
  return a + b;
}

add(2, 5);                    // Valid, returns `7`
const value = add('a', 'b');  // Valid, but `'ab'` is typed as a number
```

## Function Overloads
https://launchschool.com/lessons/cc0e9f36/assignments/c643808f

- "Function overloads allow us to define multiple function signatures for the same function, each with different parameter and return types."
- Must have at least 2 overload signatures
- Compatibility of implementation signature
    1. Parameters of implementation must match *all* overload signatures
    2. One's parameter type should be assignable to the other's parameter type
    3. Return of implemention must match all overload signatures

```ts
function wrapInArray(val: string): string[];                       // Overload Signature
function wrapInArray(val: number): number[];                       // Overload Signature
function wrapInArray(val: string | number): (string | number)[] {  // Implementation Signature
  return [val];
}
```


# Index Signatures

- Use `[value: type]` notation to allow for future unknown properties with a consistent typing to be added to an object.

```ts
interface Price {
  [item: string]: number;
}

const ownedProperty: Price = {
  car: 20_000,
  bicycle: 2_000,
}

ownedProperty.tv = 500;         // Valid
ownedProperty.owner = 'Derek';  // TSError: Type 'string' is not assignable to type 'number'.
```

# Generics
https://launchschool.com/lessons/cc0e9f36/assignments/0796881b

- "In their simplest version, generics are best thought of as all-purpose placeholders for a type that can be specified later."
- Generics are placeholder types than can be defined at a later time.
- The generic type can be inferred by the argument passed in.
- Multiple generic types should be separated by commas
    - `Example<T, K>`
- Generics are possible through functions, objects, and arrays.

### Function

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray('hello, world');
wrapInArray(42);
```
>The `wrapInArray` function utilizes the generic type `T` to allow any value to be passed inside and return an array of that value. This is possible because TypeScript uses type inference to determine the type of its passed-in value, assign that type to `T`, then use that information for the return type.

### Object
```ts
interface Person<T> {
  name: string;
  age: T;
}

const stringBob: Person<string> = {
  name: 'Bob',
  age: 'thirty',
};

const numBob: Person<number> = {
  name: 'Bob',
  age: 30,
}
```
>In this example, the generic type `T` allows the user to determine its type at a later point and apply it to all instances of `T` within the object it's constructing. This allows for flexible code that may have to adapt based upon the kind of data received.

## keyof
https://launchschool.com/lessons/18156389/assignments/285a50b3

- "The `keyof` operator evaluates to a union of an interface's properties."
- The `keyof` operator creates a union type of all its members' property names.

```ts
interface Instrument {
  make: string;
  model: string;
  section: string;
}

type InstrumentKeys = keyof Instrument;  // 'make' | 'model' | 'section'

function getInstrumentProperty(instrument: Instrument, key: InstrumentKeys): object | string {
  return instrument[key];
}
```

## Generic Constraints
https://launchschool.com/lessons/18156389/assignments/6bc0b1c1

- "Generic constraints help us refine and restrict our generic types, providing more stringent rules that these types must adhere to."
- Generics use `extends` to extend a generic type to include specific members

```ts
function getProperty<O, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key];
}

const derek = {
  name: 'Derek',
  age: 31,
};

getProperty(derek, 'name');   // Valid
getProperty(derek, 'email');  // TSError, Argument of type '"email"' is not assignable to parameter of type '"name" | "age"'.
```
>In this example, the generic type `K` extends the union type created by `keyof O` to *include the argument to which its assigned*. This means that whatever object is passed into the function, assigned to generic type `O`, must contain that key name or TypeScript will complain.

```ts
interface Person {
  name: string;
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

function getName<O extends { name: string }>(data: O): string {
  return data.name;
}

const billy: Musician = {
  name: 'Billy',
  age: 32,
  instrument: 'clarinet',
};
```
>In this example, the generic type `O` requires that its object contains the property `'name'`, as `O` represents the intersection of whatever object is passed in and `{ name: string }`.

# Utility Types

- "Utility types are special types in TypeScript that help developers perform transformations from one type to another."

## Pick
https://launchschool.com/lessons/f1e59145/assignments/ff4868f3

- The `Pick` utility type filters an interface to include only the members included in its generic argument.
    - Uses `keyof` internally to filter.
- An invalid member will throw a TypeScript error.
- Multiple members should be separated by a union type.

```ts
interface Student {
  name: string;
  age: number;
  year: string
  email: string;
}

type User = Pick<Student, 'name' | 'age' | 'email'>;

const user: User = {
  name: 'Derek',
  age: 31,
  email: 'derek@gmail.com',
};
```

## Omit
https://launchschool.com/lessons/f1e59145/assignments/ff4868f3

- The `Omit` utility type filters an interface to include every member *except* those included in its generic argument.
- An invalid member will be ignored.
- Multiple members should be separated by a union type.

```ts
interface Student {
  name: string;
  age: number;
  year: string
  email: string;
}

type User = Omit<Student, 'year'>;

const user: User = {
  name: 'Derek',
  age: 31,
  email: 'derek@gmail.com',
};
```

## ReturnType
https://launchschool.com/lessons/f1e59145/assignments/752ca3f2

- "The `ReturnType` utility type allows us to extract the return type of a function."
- Accepts a *function type* as an argument
    - Not the function itself, but its type

```ts
function createInstrument(type: string, key: string) {
  return { type, key };
}

type Instrument = ReturnType<typeof createInstrument>;

function play(instrument: Instrument) {
  console.log(`Playing my ${instrument.key} ${instrument.type}.`);
}

const clarinet = createInstrument('clarinet', 'Bb');
play(clarinet);  // Playing my Bb clarinet.
```

## Parameters
https://launchschool.com/lessons/f1e59145/assignments/752ca3f2

- "`Parameters` returns the parameter types as a tuple."
- Accepts a *function type* as an argument

```ts
function add(a: number, b: number) {
  return a + b;
}

type twoNums = Parameters<typeof add>;

const nums: twoNums = [3, 4];
```

## Partial
https://launchschool.com/lessons/f1e59145/assignments/75930d5d

- "The `Partial` type allows us to create a new type based on an existing type, where all of the type's properties are optional."
- Most useful when you don't know what kind of data you are going to receive.

```ts
interface ResponseData {
  page: number;
  size: number;
  location: string;
}

function logData(data: Partial<ResponseData>) {
  Object.entries(data).forEach(([k, v]) => {
    console.log(`${k}: ${v}`);
  });
}

logData({ page: 23, size: 2 });
logData({ location: 'Somewhere' });
logData({ page: 14, location: 'There' });
```

# Notes

- readonly
    - "In TypeScript, readonly properties are used to create properties that can only be set once during initialization and cannot be modified afterward."
    - https://launchschool.com/lessons/e46f5e6c/assignments/72d37d4b
    - If `readonly` is pointing to an object, its nested objects *can* be changed.
    - This can be bypassed for arrays with `ReadonlyArray<element types>`
    - Revisit some of the quirks later
- Type Assertion
    - "we can use a feature called type assertions to force the compiler to treat a value as a given type."
    - https://launchschool.com/lessons/e46f5e6c/assignments/f7334412
    - This is especially useful in AJAX when a return may come later that we know will be a certain type
- Classes
    - https://launchschool.com/lessons/e46f5e6c/assignments/3a786d9d
    - `implements` can be used to match props/instance methods of a class to an interface
        - Still must include all relevant types. This just allows errors to be easily seen
    - Subclasses must have the same function signatures as parents

- Function overloads
    - Different parameters create different returns
    - Compatibility of implementation signature
        1. Parameters of implementation must match all overload signatures
        2. One's parameter type should be assignable to the other's parameter type
        3. Return of implemention must match all overload signatures
- Type Predicate
    - https://launchschool.com/lessons/edc1804c/assignments/277255fa
    - Uses the parameter and defined return to determine if a value is a certain type
        - `function example(parameter: type) parameter is DesiredType {`
        - The function should return a boolean
        - QUESTION
            - Why can't we just use a boolean return? Ask forum.
- Type Guard approaches
    - https://launchschool.com/lessons/edc1804c/assignments/c4c9b02e
    1. `typeof`
    2. `in`
    3. Truthiness
    4. `instanceof`
- Short Circuting
    - https://launchschool.com/lessons/edc1804c/assignments/396c04b1
- Discriminated Unions
    - https://launchschool.com/lessons/edc1804c/assignments/eb2354d7
    - A consistent property throughout multiple object types to help distinguish between the types
- Exhaustiveness Checking
    - https://launchschool.com/lessons/edc1804c/assignments/d4fe90c7
    - Using `never` to prevent the end of an if/else or switch case
- Type Unsoundness
    - https://launchschool.com/lessons/edc1804c/assignments/8cc12760
    - Despite all of TypeScript's compiler checks, some things can still slip through the cracks
    - "Type unsoundness happens when the type system fails to prevent type errors, resulting in runtime errors. This can lead to unexpected behavior and bugs in your code."
    - Examples
        1. Use of `any`
        2. Type assertions
        3. Indexing beyond bounds of array
- Index Signatures
    - Can only use `string | number | symbol` for index

- Declaration Merging
    - https://launchschool.com/lessons/18156389/assignments/7e47e4a7
    - "Declaration merging refers to the TypeScript compiler's ability to take two separate interface declarations that share the same name and create a single interface that merges the original ones."
    - Only works for interfaces, not type aliases
- Type Intersections
    - https://launchschool.com/lessons/18156389/assignments/8ecb0087
    - "Type intersections allow you to combine multiple types into a single type."
    - Uses `&` to create intersection
    - `extends` is generally preferred as it prevents clashing members
        - A type intersection would allow `{ id: string }` and `{ id: number }` while `extends` would not.
Interfaces vs Type Aliases
    - https://launchschool.com/lessons/18156389/assignments/7fa6e9b3
    1. Versatility
        - Interfaces are only used for objects
        - Type Aliases are used for *all* types
    2. Declaration merging
        - Interfaces can be defined repeatedly, merging each time (open)
        - Type Aliases cannot be re-declared (closed)
    3. Extending
        - Interfaces use `extends`, which is more expressive
        - Type Aliases use Type Intersections
    4. Error messages
        - Interfaces provided clearer errors (see `extends`)
        - Type Aliases can create type unsoundness
- Spread Operator
    - https://launchschool.com/lessons/f1e59145/assignments/0305025b
    - Enforces type during the merge
    - Used to concatenate 2 objects
        - If 2 are used and share properties, the second will overwrite the first
        - If 1 is used before an object literal, the property will be overwritten
        - If 1 is used after an object literal, an error will be shown
- Options
    - https://launchschool.com/lessons/f1e59145/assignments/c103b744
- Exceptions handling
    - https://launchschool.com/lessons/f1e59145/assignments/cd5ebe2b
    - Use the type definition of `unknown` for the error
        - If it is an `instanceof` Error, proceed
        - Otherwise, throw an actual error
- Promises
    - https://launchschool.com/lessons/f1e59145/assignments/8f2ad165
    - Use generic syntax with `Promise` and indicate the *final* return
        - This will make the return type `type | PromiseLike<type>`
            - Promises can return a value or another Promise
    - Await/Async REVISIT
        - SPEND SOME TIME LEARNING AWAIT/ASYNC
    - Rejection is the same line of logic as exceptions handling


# SPOT session with Scott

build time is when you write the code
run time is when you run the code

- any
  - Esstentially removes the type guards
- Unknown
    - TS is forcing us to check what type it is

- TS is all about type guards

```ts
function greet(greeting: string, name = 'Person'): void {
  console.log(`${greeting}, ${name}`);
}

let test = greet('Hello');
```

- TURN INTELLISENSE OFF
- Look into ReadonlyArray