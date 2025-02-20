type Elephant = {
  kind: 'elephant';
  weight: number;
};

type Tiger = {
  kind: 'tiger';
  speed: number;
}

type Peacock = {
  kind: 'peacock';
  featherLength: number;
}

type Animal = Elephant | Tiger | Peacock;

function describeAnimal(animal: Animal): string {
  switch (animal.kind) {
    case 'elephant':
      return `An elephant weights ${animal.weight}kg.`;
    case 'tiger':
      return `A tiger runs ${animal.speed}mph.`;
    case 'peacock':
      return `A peacock's feathers are ${animal.featherLength}cm long.`;
    default:
      const _exhaustiveCheck: never = animal;
      return `Unknown animal: ${JSON.stringify(_exhaustiveCheck)}`;
  }
}

describeAnimal({
  kind: 'peacock',
  featherLength: 7,
});

/* 
If we try to add a `Giraffe`, TypeScript will complain, as the type is not 
included in the `Animal` union type.
*/