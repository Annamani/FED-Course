// let x = { a: "red", b: "blue", c: "green" };
// console.log(x);
// const person = {
//     firstName: "Kamma",
//     lastName: "Annamani",
//     age: 28,
//     eyeColor: "Black"
//   };
  
//   console.log(person.age);      
//   console.log(person.lastName); 
  
//   person.eyeColor = "brown"
//   console.log(person.eyeColor);

let person = {
    name: "kumaran",
    home: [
      { country: "ind", city: "dgl", type: "village" },
      { country: "ind", city: "che", type: "city" },
      { country: "dk", city: "bal", type: "city" },
    ],
    language: ["Tamil", "English"],
    height: 163,
    fav: { color: "blue", programming: "go", movie: { name: "triangle", release: 2009 } },
  };
  
  console.log(person.language[0]); // Tamil
  console.log(person.fav.programming); // go
  console.log(person.fav.movie.release); // 2009
  console.log(person.home[0].type); // village
  console.log(person.height); // 163