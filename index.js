////////////////////////////////////////////////
// Destructuring

const person = {
  firstName: 'Bruno',
  age: 29,
  favColor: 'Blue',
};

// Usual way
// const firstName = person.firstName;

// Destructure
const { firstName, favColor, age } = person;

console.log(firstName, favColor, age);

////////////////////////////////////////////////
// Array destructuring
const nums = [7, 9, 3, 5, 2];

const [a, b, c] = nums;

console.log(a, b, c);

////////////////////////////////////////////////
// Functions

const getCalculations = (a, b) => {
  // return {
  //   sum: a + b,
  //   diff: Math.abs(a - b),
  //   product: a * b,
  // };

  return [a + b, Math.abs(a - b), a * b];
};

const [sum, diff, product] = getCalculations(7, 9);
console.log(sum, diff, product);

////////////////////////////////////////////////
// Props
const doSomething = ({ name }) => {
  console.log(name);
};

doSomething({ name: 'Bruno', age: 29 });
