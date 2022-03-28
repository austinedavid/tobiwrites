const ulEl = document.querySelector(".menu-container");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click", function(){
    ulEl.classList.add("show-menu")
})

closeBtn.addEventListener("click", function(){
    ulEl.classList.remove("show-menu")
})