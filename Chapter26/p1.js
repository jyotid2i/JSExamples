// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 states : Pending, Fulfilled,  Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = true;   //false
    if(!error) {
        resolve("Yes! resolved the promise!");
    }
    else
    {
        reject("No! rejected the promise.");
    }
});

console.log(myPromise);

// Thenables

myPromise
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})