const students = [
  "Mehrnoosh",
  "Maria",
  "Oumaima",
  "Yiting",
  "Sunitha",
  "Sukhwinder",
  "Prachi",
  "Busra",
  "Paloma",
  "Annamani",
  "Sravani",
  "Natalia",
  "Fatima",
  "Tejaswini",
  "Fulya",
  "Gloryfel",
];
const teachers = [
  "Henderson",
  "Tifana",
  "Iga",
  "Engiber",
  "Kumaran",
  "Lukáš",
  "Tim",
];

// console.log(students);
// console.log(teachers);
//Create a button to shuffle students and teachers array
const button = document.createElement("button");
button.innerText = "Assign students to teachers";
document.body.appendChild(button);
button.addEventListener("click", () => {
  //shuffle students array
  const shuffledStudentsArray = students.sort(() => Math.random() - 0.5);
  console.log(shuffledStudentsArray);
  //shuffle teachers array
  const shuffledTeachersArray = teachers.sort(() => Math.random() - 0.5);
  console.log(shuffledTeachersArray);

  //pick first student, pick first teacher and assign them.
  //save the result in a array of objects [ {...}, {...}, {...} ]
  const assignedStudents = students.map((shuffledStudentsArray, index) => {
    return {
      student: shuffledStudentsArray,
      teacher: shuffledTeachersArray[index % shuffledTeachersArray.length],
    };
  });
  console.log(assignedStudents);
});
