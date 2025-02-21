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
- Shape
    - "The "shape" of an object refers to the structure of its properties and their types. When we talk about the shape of an object, we are referring to the names and types of the object's properties."
    - https://launchschool.com/lessons/e46f5e6c/assignments/c8536259
- Structural Typing
    - "This means that when the compiler compares two types to determine whether they are compatible, it only looks at the shape of the data -- their properties and the types of those properties -- rather than comparing the names of the types."
    - https://launchschool.com/lessons/e46f5e6c/assignments/1b314913
    - Even though the type *name* might be different, if the type itself matches, then TypeScript doesn't complain
    - When assigning an object to a variable, it may include more properties so long as the required ones are present. Only when referencing another variable
        - However, TypeScript will still not recognize it as a property!***
        - If assigned to an object literal, TypeScript will complain
```ts
let personA = { name: 'Derek', age: 31 };
let personB: { name: string } = personA;  // Valid

personB.age;  // TSError!
let personC: { name: string } = { name: 'Bob', age: 22 };  // TSError!
```
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
- Unions
    - https://launchschool.com/lessons/cc0e9f36/assignments/42f54844
    - Each one is called a 'member'
    - Any operation must be usable on *every* member, unless narrowing occurs
        - This includes object properties
            - To narrow this, you can use `in` ( `if ("property" in obj) {` )
                - Returns `true` if property exists on object or prototype chain
    - narrow type
        - "A narrow type is more specific and represents a smaller set of possible values"
    - wide type
        - "a wide type is more general and represents a larger set of possible values."
    - type guard
- Function overloads
    - Different parameters create different returns
    - Compatibility of implementation signature
        1. Parameters of implementation must match all overload signatures
        2. One's parameter type should be assignable to the other's parameter type
        3. Return of implemention must match all overload signatures
- Generics
    - https://launchschool.com/lessons/cc0e9f36/assignments/0796881b
    - "generics are best thought of as all-purpose placeholders for a type that can be specified later."
    - The type can be inferred by the argument passed in
    - Can use multiple types in a generic (`example<T1, T2>`)
    - Arrays have their own TypeScript syntax that can be used (`T[] === Array<T>`)
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
- `unknown`
    - https://launchschool.com/lessons/edc1804c/assignments/bafd77a3
    - A safer version of `any`
    - Cannot be assigned to any other type
    - Cannot access any properties on `unknown` type (including methods)
    - You *can* use type guards to determine type of `unknown`.
    - When checking for an object, you must check for `null` as well
        - Because of the extra work involved, many applications will abstract the validation to a simpler API, such as `io-ts`, `runtypes` and `zod`
- Index Signatures
    - Can only use `string | number | symbol` for index

- Declaration Merging
    - https://launchschool.com/lessons/18156389/assignments/7e47e4a7
    - "Declaration merging refers to the TypeScript compiler's ability to take two separate interface declarations that share the same name and create a single interface that merges the original ones."
    - Only works for interfaces, not type aliases
- `extends`
    - Allows a new interface to be made that inherits members from another interface
    - https://launchschool.com/lessons/18156389/assignments/8e25c4ce
    - You can separate multiple inheritees with a comma
        - `interface Child extends Parent1, Parent2 {`
    - You can extend from a type alias, but a type alias cannot extend
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
- `keyof`
    - https://launchschool.com/lessons/18156389/assignments/285a50b3
    - "The keyof operator evaluates to a union of an interface's properties"
    - Creates a union type of all of the keys of an interface
        - `{ name: string, age: number }` => `keyof` => `'name' | 'age'`
- Generic Constraints
    - https://launchschool.com/lessons/18156389/assignments/6bc0b1c1
    - "Generic constraints help us refine and restrict our generic types, providing more stringent rules that these types must adhere to."
    - Uses `extends` to extend members of an interface to include specific members
    - REVISIT
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
- Utility Types
    - Pick/Omit
        - https://launchschool.com/lessons/f1e59145/assignments/ff4868f3
        - `Pick<>` will filter the specified keys using `keyof`
            - An error will be shown if a specified key does not exist
        - `Omit<>` will omit the specified keys from the returned type
            - This will NOT show an error if the specified key does not exist
    - ReturnType/Parameters
        - https://launchschool.com/lessons/f1e59145/assignments/752ca3f2
        - Both must receive a function type as an argument
            - `(arg1: type, arg2: type) => type`
        - `ReturnType<>` returns the function's return type
            - `type`
        - `Parameters<>` return the function's parameters types
            - `[type, type]`
    - Partial
        - https://launchschool.com/lessons/f1e59145/assignments/75930d5d
        - Using an exists interface, returns a new interface with all members optional

