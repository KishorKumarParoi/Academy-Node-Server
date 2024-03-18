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
var Kishor = new User("Kishor", 25);
console.log(Kishor.age);
console.log(Kishor.courseCount);
Kishor.courseCount = 1000;
console.log(Kishor);
