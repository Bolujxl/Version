// traverse the dom to get the headings inside the container div

let container= document.getElementById("container");

let containerKids = container.children;

let firstKid = containerKids[0];
let firsthead = document.getElementById("firsthead");
let firstChild = container.firstElementChild;
let secondhead = document.getElementById("secondhead");


let store1st = firsthead.parentElement;
// previous element sibling
let niStore = secondhead.previousElementSibling;

// event listener to the button
const btn = document.getElementById("btn");
btn.addEventListener('click', (event) => {
    console.log('Button was clicked', event);
    firsthead.textContent = "The first heading has changed";
    secondhead.style.color = "green";
    niStore.style.fontSize = "2.5rem";
});

function changeText() {
    firsthead.textContent = "Text changed using function";
    secondhead.style.textDecoration = "underline";
    secondhead.nextElementSibling.style.fontSize = "3.2rem";
}

btn.addEventListener('mouseover', changeText);
