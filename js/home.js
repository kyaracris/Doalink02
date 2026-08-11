// =====================================
// DOALINK - HOME
// =====================================

// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    alert("Faça login para continuar.");
    window.location.href = "login.html";
}

// Exibe o nome do usuário
document.getElementById("nomeUsuario").textContent =
`Bem-vindo, ${usuarioLogado.nome}!`;

// Busca usuários e doações
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// =============================
// DASHBOARD
// =============================

document.getElementById("totalUsuarios").textContent = usuarios.length;
document.getElementById("totalDoacoes").textContent = doacoes.length;

const cidades = [...new Set(doacoes.map(doacao => doacao.cidade))];
document.getElementById("totalCidades").textContent = cidades.length;

// Cada doação representa uma família ajudada
document.getElementById("familias").textContent = doacoes.length;

// =============================
// LISTA DE DOAÇÕES
// =============================

const lista = document.getElementById("listaDoacoes");

function carregarDoacoes(listaDoacoes) {

    lista.innerHTML = "";

    if (listaDoacoes.length === 0) {

        lista.innerHTML = `
            <div style="width:100%;text-align:center;padding:60px;">
                <h2>Nenhuma doação cadastrada.</h2>
                <p>Seja o primeiro a ajudar alguém ❤️</p>
            </div>
        `;

        return;
    }

    listaDoacoes.forEach(doacao => {

        lista.innerHTML += `

        <div class="card">

            <img src="${doacao.imagem}" alt="${doacao.titulo}">

            <h3>${doacao.titulo}</h3>

            <p>${doacao.descricao}</p>

            <p><strong>Categoria:</strong> ${doacao.categoria}</p>

            <p><strong>Cidade:</strong> ${doacao.cidade}</p>

            <p><strong>Doador:</strong> ${doacao.usuario}</p>

            <p><strong>Data:</strong> ${doacao.data}</p>

         <div class="botoes-card">

    <button onclick="abrirDetalhes(${doacao.id})">

        Ver Detalhes

    </button>

    <button onclick="favoritar(${doacao.id})">

        ❤️ Favoritar

    </button>

</div>
        </div>

        `;
    });

}

// Carrega todas as doações
carregarDoacoes(doacoes);

// =============================
// PESQUISA
// =============================

const pesquisa = document.getElementById("pesquisar");

pesquisa.addEventListener("keyup", function () {

    const texto = pesquisa.value.toLowerCase();

    const resultado = doacoes.filter(doacao => {

        return (
            doacao.titulo.toLowerCase().includes(texto) ||
            doacao.descricao.toLowerCase().includes(texto) ||
            doacao.categoria.toLowerCase().includes(texto) ||
            doacao.cidade.toLowerCase().includes(texto)
        );

    });

    carregarDoacoes(resultado);

});
// =============================
// FILTRO POR CATEGORIA
// =============================

const filtroCategoria = document.getElementById("filtroCategoria");

filtroCategoria.addEventListener("change", function () {

    const categoria = filtroCategoria.value;

    if (categoria === "") {

        carregarDoacoes(doacoes);

        return;

    }

    const resultado = doacoes.filter(doacao => doacao.categoria === categoria);

    carregarDoacoes(resultado);

});
// =============================
// CONTATO
// =============================

function contato(telefone) {

    alert("Telefone para contato:\n\n" + telefone);

}
function abrirDetalhes(id){

    localStorage.setItem("doacaoSelecionada", id);

    window.location.href = "detalhe.html";

}
// =============================
// FAVORITOS
// =============================

function favoritar(id){

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if(!favoritos.includes(id)){

        favoritos.push(id);

        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        alert("Doação adicionada aos favoritos!");

    }else{

        alert("Essa doação já está nos favoritos.");

    }

}
// =============================
// RODAPÉ
// =============================

document.querySelector("footer p").textContent =
`© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;