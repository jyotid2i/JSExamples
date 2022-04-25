

const myPromise = new Promise((resolve,reject) => {
    const error = true;  // or false;

    if(!error){
        resolve("Yes! resolved the promise!");
    }
    else
    {
        reject("No! rejected the promise.");
    }
});

console.log(myPromise);

myPromise.then(value => {
    console.log(value);
})

.then(newValue => {
    console.log(newValue);
})

.catch(err => {
    console.error(err);
})