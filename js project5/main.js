let btn = document.getElementById("btn");
let body = document.body;


btn.addEventListener("click" , function(){
body.style.background = "#" + Math.random().toString(16).slice(2,5)
})