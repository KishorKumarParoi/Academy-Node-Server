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
