// Question 1 
console.log("Question 1")
function gradeStudent(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks > 70 && marks <= 90) {
        return "B Grade";
    } else if (marks > 50 && marks <= 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

console.log(gradeStudent(95))
console.log(gradeStudent(85))
console.log(gradeStudent(65))
console.log(gradeStudent(45))


// Question 2
console.log("Question 2")
function generateNumbers(num1, num2) {
    let result = [];
    for (let i = num1 + 1; i <= num2; i++) {
        result.push(i);
    }
    return result.join(",");
}

console.log(generateNumbers(10, 25))


// Question 3
console.log("Question 3")
function checkNumber(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkNumber(5))
console.log(checkNumber(-3))
console.log(checkNumber(0))


// Question 4

console.log("Question 4")
// The comma operator in JavaScript allows you to evaluate multiple expressions in a single statement, returning the value of the last expression. It is often used in for loops or when you want to execute multiple operations where only one expression is expected.

let x = (2, 3, 5);
console.log(x) 

let a = 1;
let b = (a += 2, a * 3, a - 1);
console.log(b)


// Question 5

console.log("Question 5")
function login(username, password) {
    if (username === "admin" && password === "12345") {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

console.log(login("admin", "12345"))
console.log(login("user", "12345"))
console.log(login("admin", "wrong"))




// Question 6
console.log("Question 6")
function getProcessingFee(method) {
    let fee;
    switch (method) {
        case "credit":
            fee = "2%";
            break;
        case "debit":
            fee = "1.5%";
            break;
        case "paypal":
            fee = "3%";
            break;
        default:
            fee = "Invalid payment method";
    }
    return fee;
}

console.log(getProcessingFee("credit"))
console.log(getProcessingFee("debit"))




// Question 7
console.log("Question 7")
function getWeatherCondition(temperature) {
    return temperature > 30 ? "Hot" : "Moderate";
}

console.log(getWeatherCondition(35))



// Question 8
console.log("Question 8")
function sumUpTo(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

console.log(sumUpTo(10))