
const users = fetch("https://jsonplaceholder.typicode.com/users");

//   Pending

console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    return response.json();
})

.then(data => {
    console.log(data);
})
