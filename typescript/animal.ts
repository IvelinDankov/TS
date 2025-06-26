class Animal {
  speak(): void {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();

dog.speak();
