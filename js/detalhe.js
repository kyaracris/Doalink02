// =====================================
// DOALINK - DETALHES
// =====================================

// Recupera o ID enviado pela Home
const id = localStorage.getItem("doacaoSelecionada");

// Busca todas as doações
const doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// Procura a doação pelo ID
const doacao = doacoes.find(item => item.id == id);

if (!doacao) {

    alert("Doação não encontrada.");

    window.location.href = "home.html";

}

// Preenche as informações

document.getElementById("fotoDoacao").src = doacao.imagem;

document.getElementById("titulo").textContent = doacao.titulo;

document.getElementById("descricao").textContent = doacao.descricao;

document.getElementById("categoria").textContent = doacao.categoria;

document.getElementById("cidade").textContent = doacao.cidade;

document.getElementById("usuario").textContent = doacao.usuario;

document.getElementById("telefone").textContent = doacao.telefone;

document.getElementById("data").textContent = doacao.data;

// Botão de interesse

document.getElementById("interesse").addEventListener("click", function () {

    alert(
`Obrigado pelo interesse!

Entre em contato com o doador pelo telefone:

${doacao.telefone}`
    );

});