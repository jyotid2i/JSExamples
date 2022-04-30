// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 states : Pending, Fulfilled,  Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;   //true
    if (!error) {
        resolve("Yes! resolved the promise!");
    }
    else {
        reject("No! rejected the promise.");
    }
});


//  Another Promise

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {

        resolve("myNextPromise resolved!");
    },3000);
});


// Calling 

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

