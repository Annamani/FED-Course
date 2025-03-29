// Creates a new div element
const newDiv = document.createElement("div");

// Changes the background color of the new div to black
newDiv.style.backgroundColor = "black";
newDiv.style.color = "white";
newDiv.innerText="New Div element created using javascript";

const section = document.querySelector("section");
// Adds the newDiv element to the end of the section element as its child
section.appendChild(newDiv);

const firstDivElement = document.querySelector("div");
firstDivElement.remove();

const secondDivElement = document.querySelector(".box");
secondDivElement.style.backgroundColor = "yellow";

const thirdDivElement = document.querySelector(".second-box");
thirdDivElement.classList.add("hidden-element");

