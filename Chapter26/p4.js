// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 states : Pending, Fulfilled,  Rejected


fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => {
        return Response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        })
    })
