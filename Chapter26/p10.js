// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await


//  2nd parameter of Fetch is a object

const getDadJoke = async () => {

    const Response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    });
    const textJokeData = await Response.text();

    console.log(textJokeData);
}

getDadJoke();