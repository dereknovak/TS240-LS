interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

class Animal implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    return 'Generic animal sound';
  }
}

class Dog extends Animal implements Dog {
  constructor(name: string) {
    super(name);
  }

  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

const myDog = new Dog('Rex');
console.log(myDog.fetch());