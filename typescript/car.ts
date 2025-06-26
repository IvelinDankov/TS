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

  isOld(): boolean {
    const currentYear: number = Number(new Date().getFullYear().toString());

    const carIsOld = currentYear - this.year > 10;
    if (carIsOld) {
      return true;
    } else {
      return false;
    }
  }
}

const car = new Car("Toyota", 1953);

console.log(car.getInfo());
console.log(car.isOld());
