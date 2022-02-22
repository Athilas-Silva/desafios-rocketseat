const days = document.querySelector("#day");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const date = new Date("Dec 25, 2022 12:00:00").getTime(); //Definindo a data limite da contagem

const counter = setInterval(function(){
    // Pegando a data e hora de hj
    let now = new Date().getTime();

    // Diferença entre a data de hj e a data limite
    let diff = date - now;

    //Calculando dia, hora, minuto e segundo
    let day = Math.floor(diff / (1000 * 60 * 60 *24));
    let hour = Math.floor(diff % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((diff % (1000 * 60)) / 1000);

    //Exibindo na tela
    days.innerText = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;

    // Se a contagem terminar o alert irá aparecer
    if(diff < 0){
        alert("A contagem terminou");
        clearInterval(counter);
    }
}, 1000);

//Abrir e fechar modal
const Modal = {
    open(){
        document.querySelector(".modal-content").classList.add("active");
    },

    close(){
        document.querySelector(".modal-content").classList.remove("active")
    }
}

// Adicionando função de clicar ao cadastrar
const register = document.querySelector("#register");
register.addEventListener("click", function(){
    alert("Cadastrado com sucesso!!");
    Modal.close();
});