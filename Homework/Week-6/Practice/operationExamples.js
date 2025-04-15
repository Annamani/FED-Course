function addNumbers(number1,number2){
    return number1+number2;
}
function incrementValue(number){
    return ++number;
}
function multiplyNumbers(firstNumber,secondNumber){
    return firstNumber*secondNumber;
}

const addResult=addNumbers(9,9);
console.log(`After adding two numbers: ${addResult}`);
const incrementResult=incrementValue(9);
console.log(`After incrementing the number: ${incrementResult}`);
const multiplyResult=multiplyNumbers(2,3);
console.log(`After multiplying  two numbers: ${multiplyResult}`);

//Previous two functions outputs as parameters
console.log(`Multiplying the two outputs: ${multiplyNumbers(addResult,incrementResult)}`)