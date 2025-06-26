class Car {
  make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `${this.make} (${this.year})`;
  }
}

const car = new Car("Toyota", 2020);

console.log(car.getInfo());
