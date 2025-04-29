const menuDatabase = [
  [
    "Papadum",
    20,
    "vegetarian",
    "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
  ],
  [
    "Pakora",
    50,
    "meat",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
  ],
  [
    "Tandoori Chicken",
    60,
    "meat",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
  ],
  [
    "Samosa",
    50,
    "vegetarian",
    "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",
    //"https://www.cubesnjuliennes.com/wp-content/uploads/2018/08/Chinese-chicken-samosa-recipe.jpg"
  ],
];

const menuElement = document.getElementById("menu-list");
const productDetails=(products)=>{
  menuElement.innerHTML = "";
  for (let item of products) {
    const [itemName, price, category, image] = item;

    //Create a li item in every iteration
    const newListElement = document.createElement("li");

    //Creating an <img> element for the product image
    //Attach these 4 elements to the <li> created before
    const newElementImage = document.createElement("img");
    newElementImage.src = image;
    newElementImage.setAttribute("height", "100");
    newElementImage.setAttribute("width", "100");
    newElementImage.setAttribute("alt", "Sorry!Img not Found");
    newListElement.appendChild(newElementImage);

    //Creating <p> tag with Name,Price and Category
    const newElementName = document.createElement("p");
    newElementName.innerHTML = itemName;
    newListElement.appendChild(newElementName);

    const newElementPrice = document.createElement("p");
    newElementPrice.innerHTML = price;
    newListElement.appendChild(newElementPrice);

    const newElementCategory = document.createElement("p");
    newElementCategory.innerHTML = category;
    newListElement.appendChild(newElementCategory);
    //Attach the <li> to the <ul> element
    menuElement.appendChild(newListElement);
  }
}
//Create a ‘vegetarian’ and ‘meat’ button that filters the products on the page.
//ArrowFunctions
const filterMenu = (category) => {
  const foodType = menuDatabase.filter(
    ([name, price, type, img]) => type === category
  );
  productDetails(foodType);
};
//EventListeners


productDetails(menuDatabase);
