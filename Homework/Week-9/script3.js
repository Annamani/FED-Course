const menuDatabase = [
  ["Papadum", 20, "vegetarian"],
  ["Pakora", 50, "meat"],
  ["Tandoori Chicken", 60, "meat"],
  ["Samosa", 50, "vegetarian"],
  ["Butter Chicken", 139, "meat"],
  ["Chicken Korma", 129, "meat"],
  ["Chicken Vindaloo", 149, "meat"],
  ["Saag Lamb", 130, "meat"],
  ["Lam Tikka Masala", 159, "meat"],
  ["Yellow Daal Tadka", 119, "vegetarian"],
  ["Biryani", 129, "vegetarian"],
  ["Gulab Jamun", 55, "dessert"],
  ["Mango Kulfi", 35, "dessert"],
  ["Rasmalai", 60, "dessert"],
];
//   console.log(menuDatabase);

const typeOfDish = menuDatabase.map((array) => {
  return {
    itemName: array[0],
    dishPrice: array[1],
    typeOfDish: array[2],
    printAll: function () {
      return `I am a ${this.itemName} of type: ${this.typeOfDish}`;
    },
  };
});

// console.log(typeOfDish);
typeOfDish.forEach( (d) => {
   const result= d.printAll();
   console.log(result);
} );

// for (const dish of typeOfDish) {
//     const result=dish.printAll();
//     console.log(result);
// }