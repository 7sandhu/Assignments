// Question 1
console.log("Question ")
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());


// Question 2
console.log("Question ")
let order = {
    orderId: 123456,
    productName: "Laptop",
    quantity : 2
};

const { orderId, productName, quantity } = order;
console.log(orderId, productName, quantity);



// Question 3
console.log("Question ")
function shoppingCart() {
    let cartItems = [];
    return {
        addItem: function(item) {
            cartItems.push(item);
        },
        getCartItems: function() {
            return cartItems;
        }
    };
}

const cart = shoppingCart();
cart.addItem({ name: "Mouse", price: 20 });
cart.addItem({ name: "Keyboard", price: 50 });
console.log('Cart Items :', cart.getCartItems());


// Question 4
console.log("Question ")
function shoppingCart1() {
    let cartItems1 = [];
    return {
        addItem1: function(item) {
            const existing = cartItems1.find(i => i.productId === item.productId);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                cartItems1.push({ ...item });
            }
        },
        getCartItems1: function() {
            return cartItems1;
        }
    };
}

const cart1 = shoppingCart1();
cart1.addItem1({ productId: 1, name: "Mouse", quantity: 1, price: 20 });
cart1.addItem1({ productId: 2, name: "Keyboard", quantity: 1, price: 50 });
cart1.addItem1({ productId: 1, name: "Mouse", quantity: 2, price: 20 });
console.log('Cart Items 1:', cart1.getCartItems1());




// Question 5
console.log("Question ")
function shoppingCart2() {
    let cartItems2 = [];
    return {
        addItem2: function(item) {
            const existing = cartItems2.find(i => i.productId === item.productId);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                cartItems2.push({ ...item });
            }
        },
        removeItem2: function(productId) {
            cartItems2 = cartItems2.filter(item => item.productId !== productId);
        },
        getCartItems2: function() {
            return cartItems2;
        }
    };
}

const cart2 = shoppingCart2();
cart2.addItem2({ productId: 1, name: "Mouse", quantity: 1, price: 20 });
cart2.addItem2({ productId: 2, name: "Keyboard", quantity: 1, price: 50 });
cart2.addItem2({ productId: 1, name: "Mouse", quantity: 2, price: 20 });
console.log('Cart Items 2:', cart2.getCartItems2());
cart2.removeItem2(1);
console.log('Cart Items 2 after remove:', cart2.getCartItems2());





// Question 6
console.log("Question ")
function createPlaylist(playlistName) {
    let songs = [];
    return {
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },
        listSongs: function() {
            return songs.map(song => `${song.songName} by ${song.artist}`);
        }
    };
}

const myPlaylist = createPlaylist("Chill Vibes");
myPlaylist.addSong("Let It Be", "The Beatles");
myPlaylist.addSong("Shape of You", "Ed Sheeran");
console.log("Songs in playlist:", myPlaylist.listSongs());