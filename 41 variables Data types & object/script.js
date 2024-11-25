console.log("HELLO WORLD");
var a = 6;
// var a = 5;
var b = 6;

var c = "Harry";
var _a = "Shubham";
// console.log(a + b );
// console.log(typeof a,typeof b,typeof c, typeof _a);
{
  //let is block scoped
  //var is global scoped
  var a = 66;
  console.log(a);
}
console.log(a);
//not alllowed because a1 is constant
// const a1 = 6;
// a1 = a1 + 6;

let x = "harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);
let o = {
  name: "harry",
  "job code": 5500,
  is_hansome: true,
};
console.log(o);
o.salary = "10 crores";
console.log(o);
