// Question 1, 2


function login(username, password) {
    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }

    const validUser = { username: "user1", password: "pass123" };
    if (username !== validUser.username || password !== validUser.password) {
        throw new Error("Invalid username or password.");
    }
    return "Login successful!";
}


let cart = [];

function addToCart(name, price, quantity) {
    if (!name) {
        throw new Error("Product name is required.");
    }
    if (typeof price !== "number" || price <= 0) {
        throw new Error("Invalid product price.");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }
    cart.push({ name, price, quantity });
    return "Product added to cart.";
}

function checkout() {
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }
    return "Checkout successful!";
}



// Question 3


function processPayment(amount, cardNumber, expirationDate) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }
    // Simple card number validation: must be 16 digits
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
        throw new Error("Invalid card number.");
    }
    if (!expirationDate) {
        throw new Error("Invalid expiration date.");
    }
    const now = new Date();
    const [expMonth, expYear] = expirationDate.split('/').map(Number);
    // Expiration date should be in MM/YY format
    if (
        !expMonth || !expYear ||
        expMonth < 1 || expMonth > 12 ||
        expYear < now.getFullYear() % 100 ||
        (expYear === now.getFullYear() % 100 && expMonth < now.getMonth() + 1)
    ) {
        throw new Error("Invalid expiration date.");
    }
    return "Payment processed successfully!";
}