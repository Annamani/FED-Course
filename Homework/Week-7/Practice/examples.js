// let arrayValues=["lion","tiger","bear","wolf","fox"]
// //Print Original array
// console.log(arrayValues)
// arrayValues[arrayValues.length-1]="dog"
// //Print Modified array
// console.log(arrayValues)

// let fruits=["apple","banana","Kiwi","apple"]
// let vegetables=["carrot","potato"]
// //Concat
// let groceries=fruits.concat(vegetables)
// console.log(groceries)
// //includes
// console.log(fruits.includes("Kiwi")); 
// console.log(fruits.includes("grape"));
// //indexOf
// console.log(fruits.indexOf("banana")); //returns index of value i.e. 1
// console.log(fruits.indexOf("apple")); //returns index of first occurrence of value i.e.0
// console.log(fruits.indexOf("grape")); //returns -1 if not found

// //join
// let words=["Welcome","to","FrontEnd","Course"]
// // Default separator is comma
// let commaString = words.join();
// console.log(commaString); // "Welcome,to,FrontEnd,Course"

// // Custom separator
// let sentence = words.join(" ");
// console.log(sentence); // "Welcome to FrontEnd Course"

// let dashString = words.join("$");
// console.log(dashString); // "Welcome$to$FrontEnd$Course"

// //Stack ops
// let stackArray=[1,2,3,4,5,6]
// stackArray.push("7");
// stackArray.push("8")
// console.log(stackArray)
// stackArray.pop()
// console.log(stackArray)

// //Queue ops
// let queue = ["person1", "person2"];

// // unshift: Add to beginning
// queue.unshift("person0");
// console.log(queue); // ["person0", "person1", "person2"]

// // shift: Remove from beginning
// let firstPerson = queue.shift();
// console.log(firstPerson); // "person0"
// console.log(queue); // ["person1", "person2"]

// //Square of a number using Arrow Functions
// let numbersArray=[5,6,2,0,1,9]
// console.log(numbersArray)

// numbersArray.forEach((n)=>console.log(n*n));


//Map Function
let numbers=[1,2,3,4,5,6,7,8,9,10]
//numbers.map((n)=>console.log(n*100))
// let numbers2=numbers.map((n)=>n*100)
// console.log(numbers2)
let evenNumbers=numbers.filter((n)=>n%2==0)
console.log(evenNumbers)

