// First let's assign the variables to the elements in the HTML
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
const resetElement = document.getElementById("reset");
const messageElement = document.getElementById("message");

// Then any variables we need to keep track of
let count = 0;

// Key Constants as separate variables for better readability (and an easier way to change them)
const maxAvailableStock = 20;
const minFreeShipping = 10;

// Helper functions
function isOutOfStock() {
  return count >= maxAvailableStock;
}

function isAtMin() {
  return count <= 0;
}

//Counter display update
function counterUpdate() {
  // Increment Element
  if (isOutOfStock()) {
    incrementElement.disabled = true;
    incrementElement.style.backgroundColor = "red";
  } else {
    incrementElement.disabled = false;
    incrementElement.style.backgroundColor = "";
  }

  // Decrement Element
  if (isAtMin()) {
    decrementElement.disabled = true;
  } else {
    decrementElement.disabled = false;
  }

  // Message Element
  // Show message when count is 10 or more
  if (isOutOfStock()) {
    messageElement.innerHTML = "<span>Out of Stock</span>";
  } else if (count >= minFreeShipping) {
    messageElement.innerHTML = "<span>You have free shipping</span>";
  } else {
    messageElement.innerHTML = "";
  }

  // Update the counter display
  counterElement.innerHTML = count;
}

//Increment Counter
incrementElement.addEventListener("click", () => {
  if (count < 30) {
    count++;
    counterUpdate();
  } else {
    alert("Counter cannot go above 30.");
  }
});

//Decrement Counter
decrementElement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterUpdate();
  } else {
    alert("Counter cannot go below zero.");
  }
});

//Reset Counter
resetElement.addEventListener("click", () => {
  count = 0;
  // Don't forget to update the counter state
  counterUpdate();
});

counterUpdate();
