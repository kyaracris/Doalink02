// =====================================
// DOALINK - PUBLICAR DOAÇÃO
// =====================================

// Verifica se existe um usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {

    alert("Faça login para acessar esta página.");

    window.location.href = "login.html";

}

// Formulário
const form = document.getElementById("formDoacao");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();

    const descricao = document.getElementById("descricao").value.trim();

    const categoria = document.getElementById("categoria").value;

    const cidade = document.getElementById("cidade").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    let imagem = document.getElementById("imagem").value.trim();

    // Caso o usuário não informe uma imagem,
    // usamos uma imagem padrão.
    if(imagem === ""){

        imagem = "https://via.placeholder.com/400x250?text=DOALINK";

    }

    const novaDoacao = {

        id: Date.now(),

        usuario: usuarioLogado.nome,

        email: usuarioLogado.email,

        titulo: titulo,

        descricao: descricao,

        categoria: categoria,

        cidade: cidade,

        telefone: telefone,

        imagem: imagem,

        data: new Date().toLocaleDateString("pt-BR")

    };

    let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

    doacoes.push(novaDoacao);

    localStorage.setItem("doacoes", JSON.stringify(doacoes));

    alert("Doação publicada com sucesso!");

    window.location.href = "home.html";

});01