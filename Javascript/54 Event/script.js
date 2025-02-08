let button =  document.getElementById("btn");

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML = "Hey Your Clicked.."
})

// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML = "Hey Your Clicked.."
// })

button.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right click please..")
})

button.addEventListener("keydown",()=>{
    document.querySelector(".box").innerHTML = "Hey Your Clicked.."
})