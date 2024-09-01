const bars=document.querySelector(".fa-bars-staggered")
const navMenu=document.getElementById("nav-menu")
const closeIcon=document.querySelector(".fa-xmark")

bars.addEventListener("click",()=>{
    navMenu.classList.toggle("hidden")
    bars.classList.toggle("hidden")
})
closeIcon.addEventListener("click",()=>{
    navMenu.classList.toggle("hidden")
    bars.classList.toggle("hidden")
})


