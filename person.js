var Person = /** @class */ (function () {
    function Person(name, age) {
        (this.name = name), (this.age = age);
    }
    Person.prototype.greet = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person("Alice", 25);
var person2 = new Person("Velin", 44);
console.log(person1.greet());
console.log(person2.greet());
