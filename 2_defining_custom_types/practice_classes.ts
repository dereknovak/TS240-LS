// 1

class Person {
  age?: number;
  name: string;

  constructor(age?: number, name: string) {
    this.name = name;
    this.age = age;
  }
}
    
/*
This will result in an error as optional parameters must always follow required
ones. Otherwise, this code will excecute without any issues.
*/

// 2

interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  move() {
    console.log('Moving!');
  }
}