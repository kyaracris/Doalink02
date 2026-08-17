// =====================================
// DOALINK - FAVORITOS
// =====================================


// =====================================
// VERIFICA USUÁRIO LOGADO
// =====================================

const usuarioLogado =
    JSON.parse(localStorage.getItem("usuarioLogado"));


if (!usuarioLogado) {

    alert("Faça login para continuar.");

    window.location.href = "login.html";

}


// =====================================
// CHAVE DOS FAVORITOS
// =====================================

const chaveFavoritos =
    "favoritos_" + usuarioLogado.email;


// =====================================
// BUSCA OS FAVORITOS DO USUÁRIO
// =====================================

let favoritos =
    JSON.parse(
        localStorage.getItem(chaveFavoritos)
    ) || [];


// =====================================
// BUSCA TODAS AS DOAÇÕES
// =====================================

const doacoes =
    JSON.parse(
        localStorage.getItem("doacoes")
    ) || [];


// =====================================
// LOCAL ONDE OS FAVORITOS APARECEM
// =====================================

const lista =
    document.getElementById("listaFavoritos");


// =====================================
// ENCONTRA AS DOAÇÕES FAVORITADAS
// =====================================

const doacoesFavoritas =
    doacoes.filter(function(doacao) {

        return favoritos.some(
            favorito => Number(favorito) === Number(doacao.id)
        );

    });


// =====================================
// NENHUM FAVORITO
// =====================================

if (doacoesFavoritas.length === 0) {

    lista.innerHTML = `

        <div class="sem-favoritos">

            <div class="icone-favorito">
                ❤️
            </div>

            <h2>
                Você ainda não possui favoritos.
            </h2>

            <p>
                Encontre uma doação interessante
                e salve nos seus favoritos!
            </p>

            <a href="home.html">
                Ver Doações
            </a>

        </div>

    `;

}


// =====================================
// MOSTRA OS FAVORITOS
// =====================================

else {

    doacoesFavoritas.forEach(function(doacao) {

        lista.innerHTML += `

            <div class="card">

                ${
                    doacao.imagem
                    ?
                    `
                    <img
                        src="${doacao.imagem}"
                        alt="${doacao.titulo}"
                    >
                    `
                    :
                    `
                    <div class="sem-imagem">
                        Sem imagem
                    </div>
                    `
                }


                <div class="card-conteudo">

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


                    <p>
                        <strong>Data:</strong>
                        ${doacao.data}
                    </p>


                    <div class="botoes-card">

                        <button
                            onclick="verDetalhes(${doacao.id})"
                        >
                            Ver Detalhes
                        </button>


                        <button
                            class="botao-remover"
                            onclick="removerFavorito(${doacao.id})"
                        >
                            ❤️ Remover
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


// =====================================
// VER DETALHES
// =====================================

function verDetalhes(id) {

    localStorage.setItem(
        "doacaoSelecionada",
        id
    );

    window.location.href =
        "detalhe.html";

}


// =====================================
// REMOVER FAVORITO
// =====================================

function removerFavorito(id) {

    id = Number(id);


    favoritos =
        favoritos.filter(function(favorito) {

            return Number(favorito) !== id;

        });


    localStorage.setItem(
        chaveFavoritos,
        JSON.stringify(favoritos)
    );


    alert(
        "Doação removida dos favoritos."
    );


    window.location.reload();

}


// =====================================
// RODAPÉ
// =====================================

const footer =
    document.querySelector("footer p");


if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

}