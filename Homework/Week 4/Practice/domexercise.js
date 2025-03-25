const header=document.querySelector('h2');
header.innerText=" Hello Annamani";

const firstElement=document.getElementById('mydiv');
setTimeout(()=>{
    firstElement.innerText="Hello REDI Class";
}, 2000);

const secondElement=document.getElementsByClassName('myclass');
secondElement.innerText="I Love Coding";

const thirdElement=document.getElementsByTagName('div')[2];
thirdElement.innerText="Coding for life";

const fourthElement=document.querySelectorAll('.list-item');
fourthElement.length;
// console.log(fourthElement.length);