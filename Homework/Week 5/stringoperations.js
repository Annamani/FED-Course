function uppercaseFirstLetter(empName){
 console.log(empName);
 let firstLetter=empName[0];
//  console.log(firstLetter.toUpperCase()+empName.slice(1));
 console.log(`${firstLetter.toUpperCase()}${empName.slice(1)}`);
// return `${empName.charAt(0).toUpperCase()}${empName.slice(1)}`;


}

uppercaseFirstLetter("annamani");
// let updatedString=uppercaseFirstLetter("annamani");
// console.log(updatedString);