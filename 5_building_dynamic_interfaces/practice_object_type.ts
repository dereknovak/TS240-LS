function getProperty<T>(obj: {[key: string]: T }, key: string): T {
  return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");