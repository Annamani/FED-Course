// Function to check if grade is sufficient for driving license (60 or more)
function isExamPassed(grade) {
    return grade >= 60;
  }
  
  console.log(isExamPassed(75)); // Should return true
  console.log(isExamPassed(45)); // Should return false
  
  // Function to check if input matches my name
  function isMyName(input) {
    return input === "Anna"; // Replace with your actual name
  }
  
  // // Example usage:
  
  console.log(isMyName("Anna")); // Should return true
  console.log(isMyName("annamani")); // Should return false
  console.log(isMyName(NaN)); // Should return false
  
  // Bonus point -> Add an input field in html and a button that will verify your name
  function onNameCheck() {
    const isNameCorrect = isMyName(document.getElementById("name").value);
    alert(isNameCorrect ? "Name is correct" : "Name is incorrect");
  }
  
  function onGradeCheck() {
    const hasPassed = isExamPassed(document.getElementById("grade").value);
    alert(hasPassed ? "Exam is Passed" : "Exam is Failed");

    // const drivingClass =2;

  }

   

