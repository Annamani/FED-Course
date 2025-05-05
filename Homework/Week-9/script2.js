const person={
    firstName:'Annamani',
    lastName:'Kamma',
    age:28,
    hasSiblings:true,
    mother:{
        firstName:'Suseela',
        lastName:'K',
        age:48,
        hasSiblings:true,
        fullName:function(){
                console.log("This is a method created inside the nested object")
                return `${this.firstName} ${this.lastName}`;
            }
    },
    fullName:function(){
        console.log("This is a method created inside the object")
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(person.fullName());
console.log(person.mother.fullName());


//Create an empty object
const empDetails={}
empDetails.firstName="Anusha";
empDetails.LastName="K";
empDetails.occupation="IT Employee";
empDetails.experience=3;
empDetails.gender="Female";
console.log(empDetails);

