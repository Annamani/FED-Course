const displayValue = document.getElementById("counterDiv");
console.log(displayValue); 
let count=0;
// function incrementCounter() {
//     count++;  
//     displayValue.innerHTML = count;
//     console.log(count); 
// }
let incrementCounter=()=> displayValue.innerHTML = ++count;
// console.log(incrementCounter);

// function decrementCounter() {
//     count--;  
//     displayValue.innerHTML = count;
//     console.log(count); 
// }
let decrementCounter=()=> displayValue.innerHTML = --count;
// console.log(decrementCounter);
// console.log(decrementCounter);
// function resetCounter() {
//     displayValue.innerHTML = 0;
// }
const resetCounter=()=>displayValue.innerHTML = 0;
// console.log(resetCounter);