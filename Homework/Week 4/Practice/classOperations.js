function addClass(){
    const myDiv= document.getElementById("myDiv");
    myDiv.classList.add("additionalClass");//Adds the class "myClass" to the div element
    console.log(myDiv.classList);//Prints: ["myClass"]
}
function removeClass(){
    const myDiv= document.getElementById("myDiv");
    myDiv.classList.remove("originalClass");//Removes the class "myClass" from the div element
    console.log(myDiv.classList);//Prints: []
}