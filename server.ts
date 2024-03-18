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

abstract class User {
  protected _courseCount = 10;

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

class subUser extends User {
  changeCourseContent(count: number) {
    this._courseCount = count;
  }

  constructor(public name: string, public age: number, public country: string) {
    super(name, age);
  }
}

const sakib = new subUser("kishor", 25, "blue");
console.log(sakib);

function identity<T>(value: T): T {
  return value;
}

console.log(identity("Kishor"));

class ArrayContainer<T> {
  constructor(private items: T[]) {
    console.log(items);
  }

  get(index: number): T {
    return this.items[index];
  }

  add(item: T): void {
    this.items.push(item);
  }
}

type numString = number | string;

const numberContainer = new ArrayContainer<numString>([1, 3, "100"]);

console.log(numberContainer);
