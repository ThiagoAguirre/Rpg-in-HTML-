/* 
  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

/*let selecionada = null;
const espadaSelecao = document.getElementById("espada-selecao");
const trilhaSonora = document.getElementById("fundo-music");

espadaSelecao.volume = 0.1;
trilhaSonora.volume = 0.04;

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

window.addEventListener("load", () => {
  trilhaSonora.play();
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
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    imagemPersonagemGrande.classList.remove("fade-out");
    imagemPersonagemGrande.classList.add("fade-in");
  }, 300);
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}*/