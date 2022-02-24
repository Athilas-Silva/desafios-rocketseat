const form = document.querySelector("form");
const input = document.querySelector("#email");

form.addEventListener("submit", function(e){
    alert("Email cadastrado com sucesso !!");
    e.preventDefault();
    console.log(input.value);
});