console.log("Harry is a hackar")
console.log("Rohan is a hacker")

setTimeout(() => {
    console.log("I am Inside SetTimeout Function")
},0);

setTimeout(() => {
    console.log("I am Inside SetTimeout 2 Function")
},0);

console.log("The End")

const callback  = (arg) => {
  console.log(arg)
}

const loadscript = (src,callback) => {
  let sc = document.createElement("script");
   sc.src = src;
   sc.onload  = callback("Harry"); 
  document.head.append(sc)

}

loadscript("https://prismjs.com/?referrer=wordpress.com",callback)
