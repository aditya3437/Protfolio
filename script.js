var btn = document.getElementById("hire_btn");
console.log("conneted")
btn.addEventListener("click",(e)=>{
    alert("working btn")
})
let subm=document.getElementById("subm");
subm.addEventListener("click",(e)=>{
    alert("message will send")
})

let header =document.getElementById("header");
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",function(){
   header.classList.toggle("header");
});


