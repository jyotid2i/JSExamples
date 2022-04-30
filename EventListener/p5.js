const divs = document.querySelectorAll("div");

/*
divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("Hi");
    })
})
*/

addGlobalEventListener("click","div", e => {
    console.log("Hi");
})


function addGlobalEventListener(type, selector, callback) {
document.addEventListener(type, e => {
    if(e.target.matches("div")) callback(e)
})
}


const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
newDiv.addEventListener('click', () => {
    console.log("Hi");
})

document.body.append(newDiv);