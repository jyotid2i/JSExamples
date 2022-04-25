

const myPromise = new Promise((resolve, reject) => {
    const error = false;  // or false;

    if (!error) {
        resolve("Yes! resolved the promise!");
    }
    else {
        reject("No! rejected the promise.");
    }
});

const myNextPromise = new Promise((resolve,reject) => {
    setTimeout(function() {
        resolve("MyNextPromise resolved!");
    },3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});