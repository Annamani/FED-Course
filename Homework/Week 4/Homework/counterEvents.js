// First let's assign the variables to the elements in the HTML
const displayValue = document.getElementById("counterDiv");
const incrementValue = document.getElementById("increment");
const decrementValue = document.getElementById("decrement");
const resetValue = document.getElementById("reset");

// Then any variables we need to keep track of
let count = 0;

incrementValue.addEventListener("click", () => {
  if (count < 30) {
    count++;
  } else {
    alert("Counter cannot go above 30.");
  }
  displayValue.innerHTML = count;
  console.log(count);
});

decrementValue.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    alert("Counter cannot go below zero.");
  }
  displayValue.innerHTML = count;
  console.log(count);
});

resetValue.addEventListener("click", () => {
  count = 0;
  displayValue.innerHTML = count;
});
