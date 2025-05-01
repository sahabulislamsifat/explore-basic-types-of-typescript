// Type of Typescript Function: Normal & Arrow

// Normal Function
// function add(number1, number2) {
//   return number1 + number2;
// }
// function add(number1: number, number2: number) {
//   return number1 + number2;
// }
function add(number1: number, number2: number): number {
  return number1 + number2;
}

// add(55, "66");
// add(55, 66);

// Arrow Function
const arrow = (number1: number, number2: number): number => number1 + number2;

// Object --> Function --> Method
// const poorUser = {
//   name: "Sifat",
//   age: 22,
//   balance: 0,
//   addBalance(balance: number): number {
//     return this.balance + balance;
//   },
// };

// String
const poorUser = {
  name: "Sifat",
  age: 22,
  balance: 0,
  addBalance(balance: number): string {
    return `This is my current balance: ${this.balance + balance}`;
  },
};

// Array Method like: Map
const arr: number[] = [1, 2, 3, 4, 5];
const newArray: number[] = arr.map(
  (element: number): number => element * element
);
