// let numbers = [1, 2, 3, 4, 5];

// // Sum all numbers
// let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum); // 15

// // With an initial value of 10
// let sumPlus10 = numbers.reduce((accumulator, current) => accumulator + current, 10);
// console.log(sumPlus10); // 25

//Sort the array
// Default sorts as strings
let fruits = ["orange", "apple", "banana"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "orange"]

// For numbers, provide a compare function
let numbers = [40, 1, 5, 200];
numbers.sort();
console.log(numbers); // [1, 200, 40, 5] (string order!)

// Correct numeric sort
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 40, 200]