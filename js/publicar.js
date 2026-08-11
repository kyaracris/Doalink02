// =====================================
// DOALINK - PUBLICAR DOAÇÃO
// =====================================

// Verifica se existe usuário logado
const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado")
);

if (!usuario) {

    alert("Faça login para publicar uma doação.");

    window.location.href = "login.html";

}


// Formulário
const form = document.getElementById("formDoacao");


// Quando o formulário for enviado
form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Pega os valores
    const titulo =
        document.getElementById("titulo").value;

    const descricao =
        document.getElementById("descricao").value;

    const categoria =
        document.getElementById("categoria").value;

    const cidade =
        document.getElementById("cidade").value;

    const telefone =
        document.getElementById("telefone").value;

    const imagem =
        document.getElementById("imagem");


    // Busca as doações já existentes
    let doacoes =
        JSON.parse(localStorage.getItem("doacoes")) || [];


    // Cria uma nova doação
    const novaDoacao = {

        id: Date.now(),

        titulo: titulo,

        descricao: descricao,

        categoria: categoria,

        cidade: cidade,

        telefone: telefone,

        usuario: usuario.nome,

        email: usuario.email || "",

        data: new Date().toLocaleDateString("pt-BR"),

        imagem: ""

    };


    // Verifica se foi selecionada uma imagem
    if (imagem.files.length > 0) {

        const leitor = new FileReader();

        leitor.onload = function() {

            novaDoacao.imagem = leitor.result;

            doacoes.push(novaDoacao);

            localStorage.setItem(
                "doacoes",
                JSON.stringify(doacoes)
            );

            alert("Doação publicada com sucesso! ❤️");

            window.location.href = "home.html";

        };

        leitor.readAsDataURL(imagem.files[0]);

    } else {

        doacoes.push(novaDoacao);

        localStorage.setItem(
            "doacoes",
            JSON.stringify(doacoes)
        );

        alert("Doação publicada com sucesso! ❤️");

        window.location.href = "home.html";

    }

});