// function addNumber(number1, number2) {
//   return number1 + number2;
// }
// console.log(addNumber(5, 7));

//Normal Function declaration
function foodOrder(amount, foodName, restuarantName) {
  return `You are ordering ${amount} ${foodName} from ${restuarantName}`;
}

//Implicit Return using Arrow Fucntion
const foodOrderArrowImplicit = (amount, foodName, restuarantName) =>
  `You are ordering ${amount} ${foodName} from ${restuarantName}`;
console.log(foodOrderArrowImplicit(2, "Burger", "McDonalds"));
console.log(foodOrderArrowImplicit(3, "Pizza", "Dominos"));

/*
If i declared foodOrder function as a const then i can't use it to modify it later. 
If i wanna modify it/change it then i have to declare it as a "let".
oodOrder = (amount, foodName, restuarantName) => `Now you are ordering ${amount} ${foodName} from ${restuarantName}`;
*/

//Explicit Return using Arrow Fucntion
const orderFoodExplicit = (quantity, foodName, restuarantName) => {
  const price=quantity*100;
  return `You are ordering ${quantity} ${foodName} from ${restuarantName} that costs ${price}`;
};
console.log(orderFoodExplicit(12, "Ultimate Savings Bucket", "KFC"));


