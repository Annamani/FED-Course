const displayValue = document.getElementById("counterDiv");
let count=0;
const incrementValue = document.getElementById("increment");
incrementValue.addEventListener("click",()=>{
    if (count<30){
        count++;
    }
    else{
        alert("Counter cannot go above 30.");
    }
    displayValue.innerHTML = count;
    console.log(count); 
})
const decrementValue = document.getElementById("decrement");
decrementValue.addEventListener("click",()=>{
    if (count>0) {
        count--;  
    } else {
        alert("Counter cannot go below zero.");
    }
    displayValue.innerHTML = count;
    console.log(count); 
})                                  
const resetValue = document.getElementById("reset");
resetValue.addEventListener("click",()=>{
    displayValue.innerHTML = 0;
})