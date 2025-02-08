let prom1= new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random no was supporting you")
    }else{

        setTimeout(() => {
            console.log("Yes I am Done")
            resolve("Harry")
        }, 3000);
    }
})

prom1.then((a) => {
  console.log(a)
}
).catch((err) => {
  console.log(err
    
  )
})
