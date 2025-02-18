type Allowed = string | number;

function combine(a: Allowed, b: Allowed): Allowed {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error(
      "Invalid inputs: both must be strings or numbers"
    );
  }
}

const result = combine("Hello", "World");
const numericResult = combine(1, 2);