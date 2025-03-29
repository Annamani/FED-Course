const header=document.querySelector('h2');
header.innerText=" Hello Annamani";


const firstElement=document.getElementById('mydiv');
setTimeout(()=>{
    firstElement.innerText="Hello REDI Class";
}, 2000);
console.log(firstElement.textContent)


const secondElement=document.getElementsByClassName('myclass');
secondElement.innerText="I Love Coding";

const thirdElement=document.getElementsByTagName('div')[2];
thirdElement.innerText="Coding for life";

const fourthElement=document.querySelectorAll('.list-item');
console.log(fourthElement.length);

const resultElement=document.getElementById('count-list');
resultElement.innerText=fourthElement.length;

//Modifying text content
