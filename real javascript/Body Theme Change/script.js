let select = document.getElementById("select");
let body = document.getElementById("body");

let box = document.getElementsByClassName("box");

select.onchange = themeChange;

function themeChange(){
     if(select.value == "dark"){
        body.style.backgroundColor = "grey";
        box[0].style.backgroundColor = "white";
        box[1].style.backgroundColor = "white";
        box[2].style.backgroundColor = "white";
        box[3].style.backgroundColor = "white";
        box[4].style.backgroundColor = "white";
        box[5].style.backgroundColor = "white";
     }else{
        body.style.backgroundColor = "white";
        box[0].style.backgroundColor = "grey";
        box[1].style.backgroundColor = "grey";
        box[2].style.backgroundColor = "grey";
        box[3].style.backgroundColor = "grey";
        box[4].style.backgroundColor = "grey";
        box[5].style.backgroundColor = "grey";
     }
}

