# TS249 'Introduction to TypeScript' Study Guide

# Navigation

- [TypeScript Compiler](#typescript-compiler)
- [Primitive Types](#primitive-types)
- [Complex Types](#complex-types)
    - [Arrays](#arrays)
- [Special Types]
    - [any]
    - [unknown]
    - [never]
- [Functions]
    - [Parameters](#parameters)
        - [Optional Parameters](#optional-parameters)
        - [Default Parameters](#default-parameters)
- [Structural Typing and Assignment]
- [Interfaces]
    - [implements]?
- [Type Assertions]
- [Widening and Narrowing]
- [Index Signatures]
- [Utility Types]
- [Generics]
    - [extends]?
    - [keyof]?
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
(Not on Study Guide)
- Union Types
    - Literal Types

# TypeScript Compiler

# Primitive Types

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

## Type Annotation

- The usage of a type, along with `:` to explicitly determine a value's type.

## Implicit Type

- TypeScript will usually attempt to *infer* a value's type. When declaring an intializing a variable.

```ts
let name: string = 'Derek';
// Same as
let name = 'Derek';

name = 'Bob';  // Valid
name = 42;     // TSError
```


# Complex Types

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

- By default, types are set to `any`, allowing any primitive or data type to be referenced by a variable. (NOT CORRECT)

```ts
let name = 'Derek';
// Same as
let name: any = 'Derek';

name = 'Bob';  // Valid
name = 42;     // Valid
```

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

- vvv NOT CORRECT. Figure out why this is not throwing an error
```ts
function add(a, b): number {
  return a + b;
}

add(2, 5);      // Valid, returns `7`
add('a', 'b');  // TSError
```

## Notes

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

# Notes

- Type Annotation
    - Using `:` to explicitly set a type defintion
- Type Inference
    - "Type inference is a feature in TypeScript that allows the compiler to automatically deduce the types of variables, function parameters, and function return values when they are not explicitly specified."
    - https://launchschool.com/lessons/525da66e/assignments/c73e2a10
- Literal Type
    - " literal types are a way to describe specific values that a variable can have."
    - https://launchschool.com/lessons/525da66e/assignments/4007c99e
- Explicit Typing
    - "Explicit typing is when you explicitly specify the type of a variable."
    - https://launchschool.com/lessons/525da66e/assignments/d573a840
- Type Inference
    - "Type inference is when TypeScript infers the data type of a variable based on its initial value and its static analysis of the code paths, including the structure of the code and the context in which a value is used. "
    - https://launchschool.com/lessons/525da66e/assignments/d573a840
    - Cannot infer function parameters, defaults to `any`