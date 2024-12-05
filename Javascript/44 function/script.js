// console.log("Hey Shubham you are nice!");
// console.log("Hey Shubham you are good!");
// console.log("Hey Shubham your t-shirt is nice!");
// console.log("Hey Shubham you are coursr is good to!");
// console.log("Hey Shubham you are ok!");


function nice(name) { 
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your t-shirt is nice!");
    console.log("Hey " + name + " you are coursr is good to!");
    console.log("Hey " + name + " you are ok!");

}

nice("Rohan");
nice("Shivam");


function sum(a,b , c = 3) {    // here c is default parameter
    // console.log(a + b);
    return a + b + c
    
}
result1 = sum(6,7);
result2 = sum(3,7);
result3 = sum(6,13 ,1);   //Here new value of c is passed other than 3

console.log("The sum of these numbers are : ",result1);
console.log("The sum of these numbers are : ",result2);
console.log("The sum of these numbers are : ",result3);


//arrow function
const func1 = (x)=>{                //function inside a variable
    console.log("I am an arrow function",x)
}

func1(34);
func1(25);
func1(98);
func1(87);
