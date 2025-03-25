//Implicit Arrow Function
const studentname=(name)=> `student name is ${name}`;
console.log(studentname("Annamani"));

//Explicit Arrow Function
const empFullName=(firstName,lastName)=>{
    return `Student full name is ${firstName} ${lastName}`;
}
console.log(empFullName("Annamani","Kamma"));

//Normal Function
function fullName(firstName,lastName){
    return `Student name is ${firstName} ${lastName}`;
}
console.log(fullName("Anusha","Kamma"));

