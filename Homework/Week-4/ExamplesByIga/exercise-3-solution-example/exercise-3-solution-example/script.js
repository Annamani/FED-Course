// Creates a new div element
const newDiv = document.createElement("div");

// Changes the background color of the new div to black
newDiv.style.backgroundColor = "black";

// Selects the first element of type section
const section = document.querySelector("section");

// Adds the newDiv element to the end of the section element as its child
section.appendChild(newDiv);

// Selects the first element of type div
const firstDiv = document.querySelector("div");

// Removes the firstDiv
firstDiv.remove();

// Selects the first element with the class "box"
const secondDiv = document.querySelector(".box");

// Changes the background color of the secondDiv to grey
secondDiv.style.backgroundColor = "grey";

// Selects the div with an id "my-div" (our third div element)
const thirdDiv = document.querySelector("#my-div");

// Applies the "hidden-element" class to the second div to hide it
thirdDiv.classList.add("hidden-element");
