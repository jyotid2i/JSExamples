// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await


//  2nd parameter of Fetch is a object

const jokeObject = { 
    id: 'pOuzPmyIYob', 
    joke: 'What do you call an eagle who can play the piano? Talonted!'
}

const postData = async (jokeObj) => {

    const Response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(jokeObj)
    });
    const jsonResponse = await Response.json();

    console.log(jsonResponse);
}

postData(jokeObject);
