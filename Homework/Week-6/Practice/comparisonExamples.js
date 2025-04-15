// function compareNumbers(a,b){
//     if(a>b){
//         console.log("a is greater than b");
//     }
//     else if (a<b){
//         console.log("a is less than b");
//     }
// }


// compareNumbers(10,20)

function checkLicense(grade,missedClasses){
   // return (grade>=60 && missedClasses<=2);
    return (grade>=60 && missedClasses<=2) || (grade>45 && !(missedClasses));
    // if (grade>=60 && missedClasses<=2){
    //     console.log("You are passed")
    // }
    // else{
    //     console.log("Sorry!! Try again")
    // }

}
console.log(checkLicense(60,2));
console.log(checkLicense(50,3));
console.log(checkLicense(46,0));




// //Check name
// function checkUsername(name){
//  console.log(name=="Anna");
//  console.log(name=="anna");
// }

// checkUsername("Anna")

// //Take input from user
// function getUserName(){
//     let username=prompt("Enter user name: ");
//     if (username){
//         console.log("Hello ",username);
//     }
//     else{
//         console.log("Sorry No username is provided.");
//     }
    
// }
// getUserName();