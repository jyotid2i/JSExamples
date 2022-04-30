// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

//  Async /Await

const getAllUserEmails = async () => {

    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await Response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    console.log(userEmailArray);
}

getAllUserEmails();