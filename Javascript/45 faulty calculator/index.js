/*
create a a faulty calculator using javascript

This faulty calculator does following:
1. It takes two numbers as input from user
2. It perfoms wrong operations as follows : 

+ ---> - 
* ---> +
- ---> / 
/ --->**

It perform wrong operation 10% of the times


*/
let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

console.log(random);
if(random > 0.1) {
    //perform correct calculation
    // alert('The result is ${eval('${a} ${c} ${b}') }');
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    
    
}else{
    //perform wrong operation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}