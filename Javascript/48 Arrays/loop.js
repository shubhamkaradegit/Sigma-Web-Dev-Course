let  a = [2,34,5,98,6,5];

a.forEach((value, index,arr)=>{
    console.log(value,index,arr)
})

let obj = {
    a:1,
    b:2,
    c:3,
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}

for (const element of a) {
    console.log(element);
}