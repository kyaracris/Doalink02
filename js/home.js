// =====================================
// DOALINK - HOME
// =====================================

// Verifica se existe um usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {

    alert("Faça login para acessar esta página.");

    window.location.href = "login.html";

}

// Mostra o nome do usuário
const nomeUsuario = document.getElementById("nomeUsuario");

nomeUsuario.innerHTML = `Bem-vindo, ${usuarioLogado.nome}!`;

// Pesquisa de doações
const campoPesquisa = document.getElementById("pesquisar");

campoPesquisa.addEventListener("keyup", function () {

    const texto = campoPesquisa.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const titulo = card.querySelector("h3").textContent.toLowerCase();

        const descricao = card.querySelector("p").textContent.toLowerCase();

        if (titulo.includes(texto) || descricao.includes(texto)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// Botões "Entrar em Contato"
const botoes = document.querySelectorAll(".card button");

botoes.forEach(botao => {

    botao.addEventListener("click", function () {

        alert("Em uma próxima versão do DOALINK será possível conversar diretamente com o doador.");

    });

});

// Atualiza o ano automaticamente
const footer = document.querySelector("footer p");

const ano = new Date().getFullYear();

footer.innerHTML = `© ${ano} DOALINK - Todos os direitos reservados.`;