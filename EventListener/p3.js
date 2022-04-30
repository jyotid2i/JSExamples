
//   Event Listener

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("Grand Parent Bubble");
})

parent.addEventListener("click", printHi)

setTimeout(() => {
    parent.removeEventListener('click', printHi)
}, 2000)


child.addEventListener("click", e => {
    console.log("Child Bubble");
})

function printHi() {
    console.log("Hi");
}