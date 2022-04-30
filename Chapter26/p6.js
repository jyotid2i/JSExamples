// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

//  Async /Await

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await Response.json();
    return jsonUserData;
}


const anotherFunc = async () => {
    const data  = await myCoolFunction();
    console.log(data);
}

anotherFunc();