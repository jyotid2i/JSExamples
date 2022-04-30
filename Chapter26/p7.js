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
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();      //2nd output
console.log(myUsers.userList);     //1st output