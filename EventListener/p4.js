
//   Event Listener

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("Grand Parent Bubble");
})


// both the annonimous function are different so we want remove it using event listener 
parent.addEventListener("click", () => {
    console.log("Hi");
})

setTimeout(() => {
    parent.removeEventListener("click", () => {
        console.log("Hi");
    })
}, 2000)


child.addEventListener("click", e => {
    console.log("Child Bubble");
})
