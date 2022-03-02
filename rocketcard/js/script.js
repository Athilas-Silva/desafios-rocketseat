//Alterando as cores do card
//Criando array com as cores e fazendo sorteio
const btn = document.querySelector("#btn");

const colors = ["#0611F1", "#F10E0B", "#880F9E", "#FC7D14", "#FCF814", "#08D808", "#000", "#8F998F"];

btn.addEventListener("click", () => {
    let newBg = Math.floor(Math.random() * colors.length);

    document.querySelector(".bg-card").style.background = colors[newBg];
    console.log(newBg)
});

//API do Github pegando algumas informações
function getGitHubProfileInfos(){
    const url = "https://api.github.com/users/Athilas-Silva";

    fetch(url).then(res => res.json()).then(data => {
        followers.textContent = data.followers //Seguidores
        following.textContent = data.following // Seguindo
        repository.textContent = data.public_repos // Repositório
        locations.textContent = data.location // Localização
    })
}

getGitHubProfileInfos();
