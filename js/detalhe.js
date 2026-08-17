// =====================================
// DOALINK - DETALHES DA DOAÇÃO
// =====================================

// Recupera o ID da doação selecionada
const id = localStorage.getItem("doacaoSelecionada");

// Busca todas as doações
const doacoes =
    JSON.parse(localStorage.getItem("doacoes")) || [];

// Procura a doação pelo ID
const doacao = doacoes.find(item => item.id == id);


// =====================================
// VERIFICA SE A DOAÇÃO EXISTE
// =====================================

if (!doacao) {

    alert("Doação não encontrada.");

    window.location.href = "home.html";

}


// =====================================
// MOSTRA OS DADOS DA DOAÇÃO
// =====================================

document.getElementById("fotoDoacao").src =
    doacao.imagem || "";

document.getElementById("titulo").textContent =
    doacao.titulo;

document.getElementById("descricao").textContent =
    doacao.descricao;

document.getElementById("categoria").textContent =
    doacao.categoria;

document.getElementById("cidade").textContent =
    doacao.cidade;

document.getElementById("usuario").textContent =
    doacao.usuario;

document.getElementById("telefone").textContent =
    doacao.telefone;

document.getElementById("data").textContent =
    doacao.data;


// =====================================
// BOTÃO TENHO INTERESSE
// =====================================

const botaoInteresse =
    document.getElementById("interesse");

const formContato =
    document.getElementById("formContato");


botaoInteresse.addEventListener("click", function () {

    formContato.style.display = "block";

    botaoInteresse.style.display = "none";

});


// =====================================
// ENVIAR MENSAGEM
// =====================================

const botaoEnviar =
    document.getElementById("enviarMensagem");


botaoEnviar.addEventListener("click", function () {

    const nome =
        document.getElementById("nomeContato").value.trim();

    const telefone =
        document.getElementById("telefoneContato").value.trim();

    const mensagem =
        document.getElementById("mensagemContato").value.trim();


    // =====================================
    // VERIFICA CAMPOS
    // =====================================

    if (!nome || !telefone || !mensagem) {

        alert("Preencha todos os campos.");

        return;

    }


    // =====================================
    // BUSCA MENSAGENS EXISTENTES
    // =====================================

    let mensagens =
        JSON.parse(localStorage.getItem("mensagens")) || [];


    // =====================================
    // CRIA NOVA MENSAGEM
    // =====================================

    const novaMensagem = {

        id: Date.now(),

        titulo:
            `Interesse na doação: ${doacao.titulo}`,

        nome:
            nome,

        telefone:
            telefone,

        mensagem:
            mensagem,

        doador:
            doacao.usuario,

        doacaoId:
            doacao.id,

        data:
            new Date().toLocaleDateString("pt-BR")

    };


    // =====================================
    // SALVA A MENSAGEM
    // =====================================

    mensagens.push(novaMensagem);

    localStorage.setItem(
        "mensagens",
        JSON.stringify(mensagens)
    );


    // =====================================
    // CONFIRMAÇÃO
    // =====================================

    alert(
        "Mensagem enviada com sucesso! ❤️\n\n" +
        "O responsável pelo DOALINK poderá verificar seu contato."
    );


    // Limpa o formulário

    document.getElementById("nomeContato").value = "";

    document.getElementById("telefoneContato").value = "";

    document.getElementById("mensagemContato").value = "";

    formContato.style.display = "none";

    botaoInteresse.style.display = "block";

});