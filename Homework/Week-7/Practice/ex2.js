let persons = [
    {
      id: 101,
      name: "kumaran",
      home: [
        { country: "ind", city: "dgl", type: "village" },
        { country: "ind", city: "che", type: "city" },
        { country: "dk", city: "bal", type: "city" },
      ],
      language: ["Tamil", "English"],
      height: 163,
      fav: { color: "blue", programming: "go", movie: { name: "triangle", release: 2009 } },
    },
    {
      id: 102,
      name: "sony",
      home: [
        { country: "ind", city: "vdsr", type: "village" },
        { country: "dk", city: "ballerup", type: "city" },
      ],
      language: ["Danish", "Tamil"],
      height: 143,
      fav: { color: "red", programming: "javascript", movie: { name: "mark antony", release: 2023 } },
    },
  ];
  
  console.log(persons[1].language[1]); // Tamil  <-- id:102's
  console.log(persons[1].fav.movie.name); // mark antony
  console.log(persons[1].id); // 102
  console.log(persons[0].fav.color); // blue
  console.log(persons[1].home[1].city); // ballerup
  console.log(persons[1].height); // 143