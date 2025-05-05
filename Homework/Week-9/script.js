const numbers=[1,2,3,4,5,6,7,8,9,10];
const summedNumbers=numbers.reduce((total,currentValue)=>{
    return total+currentValue;  
},100); //If we want to start the initial value from 100 otherwise we can keep 0
console.log(summedNumbers); //155

//Square of a numbers in array using For loop example
const number=[2,3,4]
for(let i=0;i<number.length;i++){
    const squaredNumber=number[i]*number[i];
    console.log(squaredNumber);
}
