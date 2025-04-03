function uppercaseFirstLetter(empName){
 console.log(empName);
 let firstLetter=empName[0];
//  console.log(firstLetter.toUpperCase()+empName.slice(1));
 console.log(`${firstLetter.toUpperCase()}${empName.slice(1)}`);
// return `${empName.charAt(0).toUpperCase()}${empName.slice(1)}`;


}
// function lowercaseSecondLetter(studentName){
//     console.log(studentName);
//     let secondLetter=studentName[1];
//     //console.log(secondLetter);
//     console.log(`${secondLetter.toLowerCase()}${studentName.slice(2)}`);   
//    }
uppercaseFirstLetter("annamani");
// lowercaseSecondLetter("KAMMA");
// let updatedString=uppercaseFirstLetter("annamani");
// console.log(updatedString);