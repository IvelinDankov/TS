class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age}`;
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Velin", 44);

console.log(person1.greet());
console.log(person2.greet());
