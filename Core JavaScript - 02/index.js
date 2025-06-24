// Question 1
console.log("Question 1")


const square = num => num * num;
const number = 5;
const result = square(number);
console.log(`The square of ${number} is ${result}`);


// Question 2
console.log("Question 2")



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];

let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}

const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
const range = maxAge - minAge;

const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);

console.log('Sorted ages:', ages);
console.log('Min age:', minAge);
console.log('Max age:', maxAge);
console.log('Median age:', medianAge);
console.log('Average age:', averageAge);
console.log('Range of ages:', range);
console.log('Difference between min and average:', diffMinAvg);
console.log('Difference between max and average:', diffMaxAvg);




// Question 3
console.log("Question 3")

const contacts = new Map();
contacts.set('Alice', { age: 25, email: 'alice@example.com', location: 'New York' });
contacts.set('Bob', { age: 30, email: 'bob@example.com', location: 'London' });
contacts.set('Charlie', { age: 22, email: 'charlie@example.com', location: 'Paris' });

function getContactDetails(name) {
  if (contacts.has(name)) {
    return contacts.get(name);
  } else {
    return 'Contact not found';
  }
}

console.log(getContactDetails('Alice'));
console.log(getContactDetails('David'));




// Question 4
console.log("Question 4")

const person1 = { name: 'John', age: 28 };
const person2 = { name: 'Emma', age: 32 };

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person2);




// Question 5
console.log("Question 5")

const uniqueNumbers = new Set([2, 3, 5, 7, 3, 2, 9]);
const numberSquares = new Map();

uniqueNumbers.forEach(num => {
  numberSquares.set(num, num * num);
});

console.log('Unique numbers:', Array.from(uniqueNumbers));
console.log('Number and their squares:');
numberSquares.forEach((square, num) => {
  console.log(`${num} => ${square}`);
});



// Question 6
console.log("Question 6")

function displayInfo(name, role) {
  console.log(`${name} is a ${role}`);
}

displayInfo.call(null, 'Alice', 'Developer');
displayInfo.apply(null, ['Bob', 'Designer']);

function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: 'Charlie' };
const boundGreet = greet.bind(person);
boundGreet();




// Question 7
console.log("Question 7")

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  calculate(operation, a, b) {
    return this[operation](a, b);
  }
};

const additionResult = calculator.calculate.call(calculator, 'add', 10, 5);
console.log('Addition result:', additionResult);

const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 6, 7]);
console.log('Multiplication result:', multiplicationResult);

const discountCalculator = {
  discount: 20,
  applyDiscount(price) {
    return price - (price * this.discount / 100);
  }
};

const applyTwentyPercentDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log('Discounted price:', applyTwentyPercentDiscount(100));