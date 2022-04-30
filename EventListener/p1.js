
//   Event Listener

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
   // console.log(e);
   // console.log(e.target);
    console.log("Grand Parent Capture");
},
 { capture: true}
 )


grandparent.addEventListener("click", e => {
    console.log("Grand Parent Bubble");
})

parent.addEventListener("click", e => {
    // e.stopImmediatePropagation();
    console.log("Parent Capture");
},
    { capture: true }
)


parent.addEventListener("click", e => {
    console.log("Parent Bubble");
})


child.addEventListener("click", e => {
    console.log("Child Capture");
},
    { capture: true }
)


child.addEventListener("click", e => {
    console.log("Child Bubble");
    e.stopImmediatePropagation();
})


document.addEventListener("click", e => {
    console.log("Document Capture");
},
    { capture: true }
)

document.addEventListener("click", e => {
    console.log("Document Bubble");
})