let arr = [1,2,3,4,5,6];

arr[0] = 5666;
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr.push("harry")); //return updated length
console.log(arr.shift());
console.log(arr.unshift("Jack"));
console.log(arr);
console.log(delete arr[4]);
console.log(arr);
