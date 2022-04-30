// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 states : Pending, Fulfilled,  Rejected

const users = fetch("https://jsonplaceholder.typicode.com/users");

// Pending 

console.log(users);
//output :pending , because promise has not resolved it is still working on

fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => {
    return Response.json();
})
.then(data => {
    console.log(data);
})
