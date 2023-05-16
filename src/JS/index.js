const botaoAlterarTema = document.getElementById("alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".botao");



function trocar(){
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo){
        

        document.querySelector('.botao').src=("./src/imagens/sun.png");
    }

    else{
        document.querySelector('.botao').src=("./src/imagens/moon.png");
    }
}