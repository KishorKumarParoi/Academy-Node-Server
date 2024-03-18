console.log("hello kkp");

function Sum(a: number, b: number): string {
  return (a + b).toString();
}

console.log(Sum(10, 20));
console.log(typeof Sum(10, 20));

type cardNumber = {
  cardNumber: string;
};

type cardCode = {
  cardCode: number;
};

type cardDetails = cardCode &
  cardNumber & {
    cvv: number;
  };

function card(user: cardDetails): cardDetails {
  console.log(user);

  return {
    cardNumber: "100",
    cardCode: 100,
    cvv: 108,
  };
}

card({ cardNumber: "kihshor", cardCode: 100, cvv: 108 });

const numbers: Array<number> = [];
numbers.push(100);
console.log(numbers);

const kkp = "kishor";
console.log(kkp);

const enum Seat {
  sovon,
  sovon_chair,
  snigdha,
}

const kishorSeat = Seat.sovon_chair;
console.log(kishorSeat);

class User {
  private _courseCount = 10;

  constructor(public name: string, public age: number) {
    console.log(name, age);
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(count: number) {
    this._courseCount = count;
  }
}

const Kishor = new User("Kishor", 25);
console.log(Kishor.age);
console.log(Kishor.courseCount);
Kishor.courseCount = 1000;
console.log(Kishor);
