// First let's assign the variables to the elements in the HTML
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
const resetElement = document.getElementById("reset");
const messageElement = document.getElementById('message');


// Then any variables we need to keep track of
let count = 0;

//Counter display update
function counterUpdate(){
  //Disable the ‘-’ button whenever the counter reaches 0 
  decrementElement.disabled = count === 0;
  if (count >= 10 && count < 20) {
    messageElement.innerHTML = '<span>You have free shipping</span>';
  } else if (count >= 20) {
    messageElement.innerHTML = '<span>Out of Stock</span>';
  }
  else {
    messageElement.innerHTML = '';
  }
  //Change the ‘+’ button’s background=red whenever the counter reaches 20 or greater
  // if (count >=20){
  //   incrementElement.style.backgroundColor = 'red';
  // }
  //Using ternary operator
  incrementElement.style.backgroundColor = count>=20? 'red':'';
}

incrementElement.addEventListener("click", () => {
  if (count < 30) {
    count++;
    counterUpdate();
  } else {
    alert("Counter cannot go above 30.");
  }
  counterElement.innerHTML = count;
});

decrementElement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterUpdate();
  } else {
     alert("Counter cannot go below zero.");
  }
  counterElement.innerHTML = count;
  // console.log(count);
});

resetElement.addEventListener("click", () => {
  count = 0;
  counterElement.innerHTML = count;
});

counterUpdate();
