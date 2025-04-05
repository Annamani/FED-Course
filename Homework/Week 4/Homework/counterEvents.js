// First let's assign the variables to the elements in the HTML
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
const resetElement = document.getElementById("reset");

// Then any variables we need to keep track of
let count = 0;

incrementElement.addEventListener("click", () => {
  if (count < 30) {
    count++;
  } else {
    alert("Counter cannot go above 30.");
  }
  counterElement.innerHTML = count;
  console.log(count);
});

decrementElement.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    alert("Counter cannot go below zero.");
  }
  counterElement.innerHTML = count;
  console.log(count);
});

resetElement.addEventListener("click", () => {
  count = 0;
  counterElement.innerHTML = count;
});
