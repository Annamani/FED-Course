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

  //Free shipping message when counter goes to 10 and less than 20
  if (count >= 10 && count < 20) {
    messageElement.innerHTML = '<span>You have free shipping</span>';
  } 
  //whenever it reaches 20,“Out of stock” and disable the + button
  else if (count >= 20) {
    messageElement.innerHTML = '<span>Out of Stock</span>';
    incrementElement.disabled = true;
  }
  else {
    messageElement.innerHTML = '';
  }
 
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
});

resetElement.addEventListener("click", () => {
  count = 0;
  counterElement.innerHTML = count;
});

counterUpdate();
