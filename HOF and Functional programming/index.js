// Question 1
console.log("Question 1")
const orderList = [
    {name : "Laptop", price : 120000},
    {name : "Mobile ", price : 70000},
    {name : "Mobile Charger", price : 1500},
    {name : "Laptop Charger", price : 10500},
];

function calculateTotal(order) {
    let total = 0;
    order.forEach(item => {
        total += item.price;
    });
    return total;
}

const totalAmount = calculateTotal(orderList);
console.log(totalAmount);


// Question 2
console.log("Question 2")

function printRandomNumber() {
    setInterval(() => {
        console.log(Math.random());
    }, 2000);
}

printRandomNumber();


// Question 3
console.log("Question 3")



let expenses = [
    {amount : 100 , category : "Utilities"},
    {amount : 200 , category : "Groceries"},
    {amount : 50 , category : "Entertainment"}
];

let expensesWithTax = expenses.map(expense => {
    return {
        amount: expense.amount,
        category: expense.category,
        tax: expense.amount * 0.1
    };
});

console.log(expensesWithTax);


// Question 4
console.log("Question 4")

let groceriesExpenses = expenses.filter(expense => expense.category === "Groceries");

console.log(groceriesExpenses);



// Question 5
console.log("Question 5")

let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

console.log(totalExpenses);


// Question 6
console.log("Question 6")

function categorizeExpense(expense) {
    return expense.amount > 100 ? "High Expense" : "Low Expense";
}

let categorizedExpenses = expenses.map(categorizeExpense);

console.log("Categorized Expenses :", categorizedExpenses);



// Question 7
console.log("Question 7")

let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log(originalNumbers);


// Question 8
console.log("Question 8")

let evenNumbers = [];
originalNumbers.forEach(num => {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
});
console.log(evenNumbers);
