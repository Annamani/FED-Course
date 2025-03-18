//Functions
// function calculateDogAge(age)
// {
//     let humanYears=age*7;
//     //console.log("Dog's age of "+age+" is "+humanYears+ " in human years");
//     alert("Your doggo is "+humanYears+" years old");
//     return humanYears;

// }
// let dogsAge=calculateDogAge(2);
// console.log("Dogs Age: "+dogsAge);

function moneyToSpendInCoffeeUntil80(age, price)
{
  let remainingAge=80-age;
  let numberOfDays=remainingAge*365;
  return numberOfDays*price;
  //let totalPrice=numberOfDays*price;
  // alert("Total Amount spend on Coffee: "+totalPrice);

}

let spendMoneyOnCoffee=moneyToSpendInCoffeeUntil80(79,40);
console.log("Total Amount spend on Coffee: "+spendMoneyOnCoffee);