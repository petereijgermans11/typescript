var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getType = function () {
        return this.type;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.type = "DOG";
        return _this;
    }
    return Dog;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.type = "CAT";
        return _this;
    }
    return Cat;
}(Animal));
function printAnimals(animals) {
    var result = "";
    for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
        var a = animals_1[_i];
        result = result + a.getName() + a.getType();
    }
    return result;
}
var animals = [new Dog("Brutus"), new Cat("Minoush")];
document.body.innerHTML = printAnimals(animals);
