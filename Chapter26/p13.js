// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await


//  2nd parameter of Fetch is a object


const requestJoke = async (firstName,lastName) => {

    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();

    //console.log(jsonResponse.value);
    console.log(jsonResponse.value.joke);

}

//requestJoke("clint","Eastwood");
requestJoke("Bruce", "Lee");
