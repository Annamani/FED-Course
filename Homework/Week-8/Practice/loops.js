//const shopNames=["Veromoda","Zara","H&M","Only"];
// console.log(shopNames);
//For Loop
// for(let i=0;i<shopNames.length;i++){
//     console.log(shopNames[i]);
// }

// //FOR -Of Loop

// const cars=["BYD","BMW","Volkswagen"];
// for(let x of cars){
//     console.log(cars[x]);
// }
// const newElement=document.getElementById("shopList");
// for(let x of shopNames){
//     const newShopList=document.createElement("li");
//     newShopList.innerHTML=x;
//     newElement.appendChild(newShopList);
// }

//Continue
const arrayValues=[1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<arrayValues.length;i++){
    if(arrayValues[i]%2===0){
        continue;
    }
    else{
        console.log(arrayValues[i]);
    }
}

