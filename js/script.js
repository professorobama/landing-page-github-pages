// Selecionando elementos HTML
const botao = document.getElementById("botaoSaudacao");

const mensagem = document.getElementById("mensagem");


// Evento de clique
botao.addEventListener("click", function () {

    mensagem.innerHTML =
        "Parabéns! 🎉 O JavaScript está funcionando corretamente!";

});


// Ano automático no rodapé
const anoAtual = new Date().getFullYear();

document.getElementById("ano").innerHTML = anoAtual;