// Question No.1
console.log("Question No.1")

function sumAsync(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

sumAsync(3, 5, (result) => {
    console.log("Question No.1 Result:", result);
});



// Question No.2
console.log("Question No.2")

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });
}

getData().then(result => {
    console.log("Question No.2 Result:", result);
});



// Question No.3
console.log("Question No.3")

async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then(data => {
    console.log("Question No.3 Result:", data);
});



// Question No.4
console.log("Question No.4")

async function fetchDataQ4(url) {
    const response = await fetch(url);
    return await response.json();
}

fetchDataQ4("https://jsonplaceholder.typicode.com/todos/1").then(data => {
    console.log("Question No.4 Result:", data);
});



// Question No.5
console.log("Question No.5")

function multiplyWithCallback(arr, callback) {
    const result = arr.map(num => num * 2);
    callback(result);
}

multiplyWithCallback([1, 2, 3], (result) => {
    console.log("Question No.5 Result:", result);
});



// Question No.6
console.log("Question No.6")

function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    let userDetails = null;
    return fetch(userUrl)
        .then(response => response.json())
        .then(user => {
            userDetails = user;
            return fetch(postsUrl);
        })
        .then(response => response.json())
        .then(posts => {
            return {
                user: userDetails,
                posts: posts
            };
        });
}

fetchUserDataAndPosts(1).then(result => {
    console.log("Question No.6 Result:", result);
});



// Question No.7
console.log("Question No.7")

function fetchMultipleData(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
}

fetchMultipleData([
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2"
]).then(responses => {
    console.log("Question No.7 Result:", responses);
});



// Question No.8
console.log("Question No.8")

function racePromises(promises) {
    return Promise.race(promises);
}

racePromises([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/todos/2").then(res => res.json())
]).then(result => {
    console.log("Question No.8 Result:", result);
});