const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector("#menu");
const search = document.querySelector("#search");

menu.addEventListener("click", () =>{
    sidebar.classList.toggle("open");
})

search.addEventListener("click", () =>{
    sidebar.classList.toggle("open");
})