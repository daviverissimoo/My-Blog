// Localiza o botão de reação pelo seu ID
const botaoReacao = document.getElementById("botaoReacao");

// Localiza o span que mostra a quantidade de reações
const contador = document.getElementById("contador");

// Define o que acontece quando o usuário clica no botão
botaoReacao.addEventListener("click", function() {

    // Aumenta em 1 a quantidade de reações
    contador.textContent = Number(contador.textContent) + 1;

});