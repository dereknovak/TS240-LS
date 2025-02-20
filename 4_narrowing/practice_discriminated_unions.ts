type Animal = Dog | Bird;

interface Dog {
  species: 'dog';
  name: string;
  age: number;
}

interface Bird {
  species: 'bird';
  name: string;
  wingspan: number;
}

function describeAnimal(animal: Animal): string {
  let info: string;

  switch (animal.species) {
    case 'dog':
      info = `${animal.name} is a ${animal.age} year(s) old dog.`;
      break;
    case 'bird':
      info = `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
      break;
  }

  return info;
}

describeAnimal({
  species: 'dog',
  name: 'Sparky',
  age: 2,
});

describeAnimal({
  species: 'bird',
  name: 'Lola',
  wingspan: 5,
});