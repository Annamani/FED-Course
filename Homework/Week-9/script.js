const numbers=[1,2,3,4,5,6,7,8,9,10];
const summedNumbers=numbers.reduce((total,currentValue)=>{
    return total+currentValue;  
});
console.log(summedNumbers); 