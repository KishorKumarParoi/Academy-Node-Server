var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello kkp");
function Sum(a, b) {
    return (a + b).toString();
}
console.log(Sum(10, 20));
console.log(typeof Sum(10, 20));
function card(user) {
    console.log(user);
    return {
        cardNumber: "100",
        cardCode: 100,
        cvv: 108,
    };
}
card({ cardNumber: "kihshor", cardCode: 100, cvv: 108 });
var numbers = [];
numbers.push(100);
console.log(numbers);
var kkp = "kishor";
console.log(kkp);
var kishorSeat = 1 /* Seat.sovon_chair */;
console.log(kishorSeat);
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this._courseCount = 10;
        console.log(name, age);
    }
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (count) {
            this._courseCount = count;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser(name, age, country) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.country = country;
        return _this;
    }
    subUser.prototype.changeCourseContent = function (count) {
        this._courseCount = count;
    };
    return subUser;
}(User));
var sakib = new subUser("kishor", 25, "blue");
console.log(sakib);
function identity(value) {
    return value;
}
console.log(identity("Kishor"));
var ArrayContainer = /** @class */ (function () {
    function ArrayContainer(items) {
        this.items = items;
        console.log(items);
    }
    ArrayContainer.prototype.get = function (index) {
        return this.items[index];
    };
    ArrayContainer.prototype.add = function (item) {
        this.items.push(item);
    };
    return ArrayContainer;
}());
var numberContainer = new ArrayContainer([1, 3, "100"]);
console.log(numberContainer);
