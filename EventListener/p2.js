
//   Event Listener

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("Grand Parent Bubble");
})

parent.addEventListener("click", e => {
    console.log("Parent Bubble");
}, { once: true})

child.addEventListener("click", e => {
    console.log("Child Bubble");
})
