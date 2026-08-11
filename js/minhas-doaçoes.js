// =====================================
// DOALINK - MINHAS DOAÇÕES
// =====================================


// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
);


if (!usuarioLogado) {

    alert("Faça login para continuar.");

    window.location.href = "login.html";

}


// Busca todas as doações
const doacoes = JSON.parse(
    localStorage.getItem("doacoes")
) || [];


// Área onde as doações serão exibidas
const lista = document.getElementById(
    "listaMinhasDoacoes"
);


// Filtra somente as doações do usuário logado
const minhasDoacoes = doacoes.filter(function(doacao) {

    const identificadorUsuario =
        usuarioLogado.email || usuarioLogado.nome;

    return doacao.usuarioId === identificadorUsuario;

});


// Verifica se o usuário possui doações
if (minhasDoacoes.length === 0) {

    lista.innerHTML = `

        <div class="sem-doacoes">

            <h2>Você ainda não publicou nenhuma doação.</h2>

            <p>
                Publique uma doação e ajude alguém que precisa! ❤️
            </p>

            <a href="publicar.html">
                Publicar uma Doação
            </a>

        </div>

    `;

}


// Mostra as doações
else {

    minhasDoacoes.forEach(function(doacao) {

        lista.innerHTML += `

            <div class="card">

                ${
                    doacao.imagem
                    ?
                    `<img src="${doacao.imagem}" alt="Imagem da doação">`
                    :
                    `<div class="sem-imagem">
                        Sem imagem
                    </div>`
                }

                <div class="card-conteudo">

                    <h3>${doacao.titulo}</h3>

                    <p>
                        ${doacao.descricao}
                    </p>

                    <p>
                        <strong>Categoria:</strong>
                        ${doacao.categoria}
                    </p>

                    <p>
                        <strong>Cidade:</strong>
                        ${doacao.cidade}
                    </p>

                    <p>
                        <strong>Telefone:</strong>
                        ${doacao.telefone}
                    </p>

                    <p>
                        <strong>Data:</strong>
                        ${doacao.data}
                    </p>

                    <button
                        onclick="verDetalhes('${doacao.id}')"
                    >
                        Ver Detalhes
                    </button>

                </div>

            </div>

        `;

    });

}


// Ver detalhes da doação
function verDetalhes(id) {

    localStorage.setItem(
        "doacaoSelecionada",
        id
    );

    window.location.href = "detalhe.html";

}


// Atualiza o ano do rodapé
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

}