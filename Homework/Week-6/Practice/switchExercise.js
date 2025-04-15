function isFamily(name){
    switch(name){
        case "anna":
            return "friend";
            break;
        case "anu":
            return "sister";
            break;
        case "John":
            return "friend";
            break; 
        default:
            return "New People";   
    }
}
console.log(` ${isFamily("anna")}`);
console.log(` ${isFamily("anu")}`);
console.log(` ${isFamily("Mani")}`);
