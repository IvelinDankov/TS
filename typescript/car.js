var Car = /** @class */ (function () {
    function Car(make, year) {
        this.make = make;
        this.year = year;
    }
    Car.prototype.getInfo = function () {
        return "".concat(this.make, " (").concat(this.year, ")");
    };
    return Car;
}());
var car = new Car("Toyota", 2020);
console.log(car.getInfo());
