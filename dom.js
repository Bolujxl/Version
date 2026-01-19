// targeting  elements with ids
const head = document.getElementById("head");
const dispensation = document.getElementById("dispensation");

// targeting  elements with classes
// this picks all the elements with the class name "head"
const headClass = document.getElementsByClassName("head");

// targeting with tag name
const headTag = document.getElementsByTagName("h1");


// targeting with query selector can pick the first element that matches the selector
// also pick either class or tag or id you just have to specify in the bracket
const headQuery = document.querySelector("#head");
const nheadQuery = document.querySelector("head");

// queryselectorall -- picks all the elements that matches the selector
const headQueryAll = document.querySelectorAll("h1");

//  changing text content
let mheadtxt = document.querySelector("#malaika")

// chnaging text content using innerHTML -- THIS ALTERS THE HTML STRUCTURE 
// let mheadhtml = document.querySelector(".malaika").innerHTML = `Macho man is a <span>man</span>`

// styling using style property
// mheadtxt.textContent = "Macho is not a woman he is a man";
// mheadtxt.style.color = "red";
// mheadtxt.style.fontSize = "1.5rem";
// mheadtxt.style.textDecoration = "underline";


// add class to html element
// remove same process
let rInput = document.querySelector("#userInput")
rInput.classList.remove("input")
rInput.classList.add("meka")
let her = rInput.classList.contains("meka")

// adding attribute is setAttribute
// getAttribute -- gets the value of the attribute = boolean 
// removeAttribute -- removes the attribute
let Resin = document.querySelector("#paragraph")
Resin.setAttribute("href", "www.me.com")
Resin.getAttribute("href")
Resin.removeAttribute("class")


// creating elements
let container = document.querySelector("#container")

let headingElement = document.createElement("h1")
headingElement.textContent = 'Magarita basis'
headingElement.setAttribute("id", "margs")

// adding the heading element to the container
container.append(headingElement)


// parent and child sequence.
let mPa = document.getElementById("hManchi")

// to get the children and display them
// for(let i = 0; i < container.children.length; i++){
//     console.log(container.children[i])
// }


container.childElementCount
container.firstElementChild
container.lastElementChild

// next element sibling
let next = mPa.nextElementSibling
next.nextElementSibling
