// 1

function calculateRectangleArea(width: number, height?: number) {
  const area = width * (height ?? width);
  return area;
}

console.log(calculateRectangleArea(3, 0));

/* 
This example will log `0` to the console. When using the `??` operator,
JavaScripts checks for a *nullish* value (`undefined` or `null`). In this case,
`0` is valid, so `area` becomes the product of `3` and `0`.
*/

// 2

// type NameOptions = {
//   firstName?: string;
//   lastName?: string;
//   title?: string;
// }

// function formatName(options: NameOptions): string {
//   const firstName = options.firstName ?? 'John';
//   const lastName = options.lastName ?? 'Doe';
//   const title = options.title ?? '';

//   return `${title} ${firstName} ${lastName}`.trim();
// }

// const formattedName = formatName({
//   firstName: "Jane",
//   lastName: "Smith",
//   title: "Dr.",
// });

// console.log(formattedName);  // "Dr. Jane Smith"
// console.log(formatName({})); // John Doe

// 3

type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
}

function formatName({
  firstName = 'John',
  lastName = 'Doe',
  title = '',
}: NameOptions): string {
  return `${title} ${firstName} ${lastName}`.trim();
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName);  // "Dr. Jane Smith"
console.log(formatName({})); // John Doe