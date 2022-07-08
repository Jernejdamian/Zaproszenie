let button = document.querySelector(".button");
let body = document.querySelector(".body");
let fspan = document.querySelector(".fspan");

button.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    if(fspan.innerText==="czerwony"){
        fspan.innerText="normalny";
    }else{
        fspan.innerText="czerwony";
    }
})