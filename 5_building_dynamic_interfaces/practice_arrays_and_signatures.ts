type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray): string[] {
  if (Array.isArray(arr)) {
    return arr.filter(el => typeof el === 'string')
              .map(el => el.toUpperCase());
  }

  return [];
}

console.log(processCustomArray(customArray));