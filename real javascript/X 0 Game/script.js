let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let chance = "X";

change_chance = function(){
    
    if(chance == "X"){
        chance = "0";
    }else{
        chance = "X";
    }
};
btn1.onclick = function (){
    btn1.innerText = chance;
    checkWin();
    change_chance();
};

btn2.onclick = function (){
    btn2.innerText = chance;
    checkWin();
    change_chance();
};

btn3.onclick = function (){
    btn3.innerText = chance;
    checkWin();
    change_chance();
};

btn4.onclick = function (){
    btn4.innerText = chance;
    checkWin();
    change_chance();
};

btn5.onclick = function (){
    btn5.innerText = chance;
    checkWin();
    change_chance();
};

btn6.onclick = function (){
    btn6.innerText = chance;
    checkWin();
    change_chance();
};

btn7.onclick = function (){
    btn7.innerText = chance;
    checkWin();
    change_chance();
};

btn8.onclick = function (){
    btn8.innerText = chance;
    checkWin();
    change_chance();
};

btn9.onclick = function (){
    btn9.innerText = chance;
    checkWin();
    change_chance();
};

function checkWin() {
    if(btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText && btn1.innerText != ""){
      alert(chance + "win");
    }

    if(btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText && btn4.innerText != ""){
        alert(chance + "win");
      }

      if(btn7.innerText == btn8.innerText && btn7.innerText == btn9.innerText && btn7.innerText != ""){
        alert(chance + "win");
      }

      if(btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText && btn1.innerText != ""){
        alert(chance + "win");
      }

      if(btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText && btn2.innerText != ""){
        alert(chance + "win");
      }

      if(btn3.innerText == btn6.innerText && btn3.innerText == btn9.innerText && btn3.innerText != ""){
        alert(chance + "win");
      }

      if(btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText && btn1.innerText != ""){
        alert(chance + "win");
      }

      if(btn7.innerText == btn5.innerText && btn7.innerText == btn3.innerText && btn7.innerText != ""){
        alert(chance + "win");
      }

      
};