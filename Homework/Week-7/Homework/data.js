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

//shuffle students array
const shuffledStudents = students.sort(() => Math.random() - 0.5);
console.log(shuffledStudents);
//shuffle teachers array
const shuffledTeachers = teachers.sort(() => Math.random() - 0.5);
console.log(shuffledTeachers);

//pick first student, pick first teacher and assign them.
//Randomly assign students to teachers
//save the result in a array of objects [ {...}, {...}, {...} ]
const assignedStudents = students.map((shuffledStudents, index) => {
  return {
    student: shuffledStudents,
    teacher: shuffledTeachers[index % shuffledTeachers.length],
  };
});
console.log(assignedStudents);