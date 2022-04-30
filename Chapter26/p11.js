// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await


//  2nd parameter of Fetch is a object

const getDadJoke = async () => {

    const Response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await Response.json();

    console.log(jsonJokeData);
    console.log(jsonJokeData.joke); //  it gives every time diff  random joke when save file
}

getDadJoke();

