var Car = /** @class */ (function () {
    function Car(make, year) {
        this.make = make;
        this.year = year;
    }
    Car.prototype.getInfo = function () {
        return "".concat(this.make, " (").concat(this.year, ")");
    };
    Car.prototype.isOld = function () {
        var thisYear = Number(new Date().getFullYear().toString());
        console.log(thisYear);
        var carIsOld = thisYear - this.year > 10;
        if (carIsOld) {
            return true;
        }
        else {
            return false;
        }
    };
    return Car;
}());
var car = new Car("Toyota", 1953);
console.log(car.getInfo());
console.log(car.isOld());
