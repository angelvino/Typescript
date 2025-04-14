//01. Function without parameters and returntype
function printMessage() {
    console.log("Hello TypeScripting...");
}
printMessage();
//02. Function with Paramneters and without return type
function printFullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    return firstName + " " + lastName;
}
var value = printFullName("Sachin", "Tendulkar");
console.log(value);
printFullName("Virat", "Kohli");
printFullName("Hello", "TypeScripting");
//03. Function with Paramneters and with return type
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result = getFullName("Vishnu", "Vardhan");
console.log(result);
//04. Functions - numbers
function sum() {
    console.log(10 + 10);
}
sum();
function Add(firstNum, secondNumber) {
    console.log(firstNum + secondNumber);
}
Add(100, 200);
Add(300, 400);
// function AddNumbers(firstNum:number,secondNum:number,thirdNum:number):number
// {
//     return firstNum+secondNum+thirdNum;
// }
// let value1:number = AddNumbers(20,20,20);
// console.log(value);
function AddNumbers(firstNum, secondNum, thirdNum) {
    if (thirdNum == undefined) {
        return firstNum + secondNum;
    }
    return firstNum + secondNum + thirdNum;
}
var result1 = AddNumbers(20, 20);
console.log(result1);
var result2 = AddNumbers(100, 100, 100);
console.log(result2);
