let dropDown = document.querySelector(".drop-down");
let dropUp = document.querySelector(".drop-up");
let dropDiv = document.querySelector(".drop-div")
dropDown.addEventListener("click",function(){
    dropDiv.style.opacity = "1";
    dropDiv.style.height = "350px";
    dropDown.style.display = "none";
    dropUp.style.display = "block";
})

dropUp.addEventListener("click",function(){
    dropDiv.style.opacity = "0";
    dropDiv.style.height = "0";
    dropDown.style.display = "block";
    dropUp.style.display = "none";
})

let n0 = document.querySelector(".n0");
let n1 = document.querySelector(".n1");
let n2 = document.querySelector(".n2");
let n3 = document.querySelector(".n3");
let n4 = document.querySelector(".n4");
let n5 = document.querySelector(".n5");
let n6 = document.querySelector(".n6");
let n7 = document.querySelector(".n7");
let n8 = document.querySelector(".n8");
let n9 = document.querySelector(".n9");
let ndot = document.querySelector(".ndot")

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multi = document.querySelector(".multi");
let div = document.querySelector(".div");
let po = document.querySelector(".po")

let eq = document.querySelector(".eq");
let cl = document.querySelector(".clear");
let bs = document.querySelector(".bs")

let screen = document.querySelector(".screen")
screen.innerHTML = "0";

let screenData = "";

n0.addEventListener("click",function(){
    screenData += "0";
    screen.innerHTML = screenData;
})

n1.addEventListener("click",function(){
    screenData += "1";
    screen.innerHTML = screenData;
})

n2.addEventListener("click",function(){
    screenData += "2";
    screen.innerHTML = screenData;
})

n3.addEventListener("click",function(){
    screenData += "3";
    screen.innerHTML = screenData;
})

n4.addEventListener("click",function(){
    screenData += "4";
    screen.innerHTML = screenData;
})

n5.addEventListener("click",function(){
    screenData += "5";
    screen.innerHTML = screenData;
})

n6.addEventListener("click",function(){
    screenData += "6";
    screen.innerHTML = screenData;
})

n7.addEventListener("click",function(){
    screenData += "7";
    screen.innerHTML = screenData;
})

n8.addEventListener("click",function(){
    screenData += "8";
    screen.innerHTML = screenData;
})

n9.addEventListener("click",function(){
    screenData += "9";
    screen.innerHTML = screenData;
})

ndot.addEventListener("click",function(){
    screenData += ".";
    screen.innerHTML = screenData;
})



plus.addEventListener("click",function(){
    screenData += "+";
    screen.innerHTML = screenData;
})

minus.addEventListener("click",function(){
    screenData += "-";
    screen.innerHTML = screenData;
})

multi.addEventListener("click",function(){
    screenData += "*";
    screen.innerHTML = screenData;
})

div.addEventListener("click",function(){
    screenData += "/";
    screen.innerHTML = screenData;
})

po.addEventListener("click",function(){
    screenData += "**";
    screen.innerHTML = screenData
})


cl.addEventListener("click",function(){
    screenData = "";
    screen.innerHTML = "0";
})

bs.addEventListener("click",function(){
    screenData = screenData.slice(0,-1)
    screen.innerHTML = screenData
})

eq.addEventListener("click",function(){
    screenData = eval(screenData)
    screen.innerHTML = screenData
})