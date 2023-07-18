let selecionada = null;
const espadaSelecao = document.getElementById("espada-selecao");

espadaSelecao.volume = 0.1;

const personagens = document.querySelectorAll(".personagem");
personagens.forEach((personagem) => {
    personagem.addEventListener("click", () => {
        if (selecionada) {
            selecionada.classList.remove("clicado");
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add("selecionado");
        personagem.classList.add("clicado");

        selecionada = personagem;

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);

        espadaSelecao.load();
        espadaSelecao.play();

    });
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.classList.remove("fade-in");
    descricaoPersonagem.classList.add("fade-out");

    setTimeout(() => {
        descricaoPersonagem.innerText = personagem.getAttribute("data-description");
        descricaoPersonagem.classList.remove("fade-out");
        descricaoPersonagem.classList.add("fade-in");
    }, 300);
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.classList.remove("fade-in");
    nomePersonagem.classList.add("fade-out");

    setTimeout(() => {
        nomePersonagem.innerText = personagem.getAttribute("data-name");
        nomePersonagem.classList.remove("fade-out");
        nomePersonagem.classList.add("fade-in");
    }, 300);
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.classList.remove("fade-in");
    imagemPersonagemGrande.classList.add("fade-out");

    setTimeout(() => {
        imagemPersonagemGrande.src = `./src/image/card-${idPersonagem}.png`;
        imagemPersonagemGrande.classList.remove("fade-out");
        imagemPersonagemGrande.classList.add("fade-in");
    }, 300);
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}