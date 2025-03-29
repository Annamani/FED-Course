const header=document.querySelector('h2');
header.innerText=" Hello Annamani";//Prints : Hello Annamani

//Selects the first element of type div using Tag Name
const firstDivElement=document.getElementsByTagName('div')[0];
firstDivElement.innerText="Coding for life";//Prints: Coding for life

//Selects the element whit ID "mydiv"
const secondDivElement=document.getElementById('mydiv');
setTimeout(()=>{
    secondDivElement.innerText="Hello REDI Class";
}, 2000);
console.log(secondDivElement.textContent);//Prints: Hello REDI Class ater 2 seconds

//Selects the first element with the class "myclass"
const thirdDivElement=document.getElementsByClassName('myclass');
console.log(thirdDivElement[0].textContent);//Prints: This is my class mentioned in Div

//Selects the list of items with the class "list-item"
const fourthDivElement=document.querySelectorAll('.list-item');
console.log(fourthDivElement.length);//Prints:the list of items in the div

//Counts the number of items in the list and prints it
const resultElement=document.getElementById('count-list');
resultElement.innerText=fourthDivElement.length;//Prints:length of the list items:5

//Modifying text content
//Prints: Welcome to JavaScript World! 
//instead of printing the text content of the first element i.e., "Coding for life"
firstDivElement.textContent="Welcome to JavaScript World!";

//Modifying the background color of the first div element
firstDivElement.style.backgroundColor="blue";//Prints: blue
firstDivElement.style.color="white";//Prints: white

//Modifying CSS styles
resultElement.style.color="red";

//Modifying HTML content
paragraphElement=document.getElementsByTagName('p')[0];//Selects the first element of type p
paragraphElement.innerHTML="This is <strong>My First paragraph</strong>";//Prints: My First paragraph in bold

//Modifying Element attributes
const btn=document.getElementById('submit-btn');//Selects the button element
btn.style.color="black";
btn.style.backgroundColor="yellow";//Prints: yellow
//btn.setAttribute('disabled', true);//Submit button is disabled
btn.setAttribute('disabled', true);//Submit button is enabled

//Creating a new element
const newHeading=document.createElement("h4");
//Prints: This is a new heading created using JavaScript
newHeading.textContent="This is a new heading created using JavaScript";
header.appendChild(newHeading);//Adds the new heading to the end of the heading element
//console.log(header.innerHTML);

const oldHeading=document.querySelector('h3');//Selects the first element of type h4
console.log(oldHeading.innerHTML);
oldHeading.remove();//Removes the old heading element
