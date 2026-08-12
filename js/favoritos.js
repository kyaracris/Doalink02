// =====================================
// DOALINK - FAVORITOS
// =====================================


// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
);


if (!usuarioLogado) {

    alert("Faça login para continuar.");

    window.location.href = "login.html";

}


// Busca os favoritos salvos
let favoritos = JSON.parse(
    localStorage.getItem("favoritos")
) || [];


// Busca todas as doações
const doacoes = JSON.parse(
    localStorage.getItem("doacoes")
) || [];


// Local onde os favoritos serão exibidos
const lista = document.getElementById(
    "listaFavoritos"
);


// Encontra as doações correspondentes aos favoritos
const doacoesFavoritas = doacoes.filter(function(doacao) {

    return favoritos.includes(doacao.id);

});


// Verifica se não existem favoritos
if (doacoesFavoritas.length === 0) {

    lista.innerHTML = `

        <div
            style="
                width:100%;
                text-align:center;
                padding:60px;
            "
        >

            <h2>
                Você ainda não possui favoritos.
            </h2>

            <p>
                Encontre uma doação interessante e salve nos favoritos! ❤️
            </p>

            <br>

            <a href="home.html">

                Ver Doações

            </a>

        </div>

    `;

}


// Exibe os favoritos
else {

    doacoesFavoritas.forEach(function(doacao) {

        lista.innerHTML += `

            <div class="card">

                ${
                    doacao.imagem
                    ?
                    `<img
                        src="${doacao.imagem}"
                        alt="Imagem da doação"
                    >`
                    :
                    `<div
                        style="
                            height:220px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            background:#eeeeee;
                        "
                    >
                        Sem imagem
                    </div>`
                }


                <h3>
                    ${doacao.titulo}
                </h3>


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
                    <strong>Doador:</strong>
                    ${doacao.usuario}
                </p>


                <button
                    onclick="verDetalhes('${doacao.id}')"
                >

                    Ver Detalhes

                </button>


                <button
                    onclick="removerFavorito('${doacao.id}')"
                >

                    Remover dos Favoritos

                </button>

            </div>

        `;

    });

}


// Abrir detalhes
function verDetalhes(id) {

    localStorage.setItem(
        "doacaoSelecionada",
        id
    );

    window.location.href = "detalhe.html";

}


// Remover favorito
function removerFavorito(id) {

    favoritos = favoritos.filter(function(favorito) {

        return favorito !== id;

    });


    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );


    alert("Doação removida dos favoritos.");


    // Recarrega a página
    window.location.reload();

}


// Atualiza o ano do rodapé
const footer = document.querySelector("footer p");


if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

}