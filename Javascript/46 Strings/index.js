console.log("This is strings turtorial..");
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);
let real_name = "Harry";
let friend = "Rohan";
console.log("His name is " + real_name + " His friends name is " + friend );
console.log(`His name is ${real_name} and his friends name is ${friend}`);  //template literals
let b = "Shivam";
console.log(b.toUpperCase());
console.log(b.slice(1,4));
console.log(b.slice(1));
console.log(b.replace("Sh","77"));
console.log(b.concat(a, " Aishwarya "," Rahul "," Priya "));

console.log(b);  //Strings are immutable. we cannot change the original string

console.log(b.charAt(0));
console.log(b.indexOf("h"));
console.log(b.startsWith("Ro"));