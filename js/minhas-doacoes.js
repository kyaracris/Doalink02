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

} else {

    // Busca todas as doações
    const doacoes = JSON.parse(
        localStorage.getItem("doacoes")
    ) || [];

    // Área onde as doações serão exibidas
    const lista = document.getElementById(
        "listaMinhasDoacoes"
    );

    // =====================================
    // IDENTIFICA O USUÁRIO LOGADO
    // =====================================

    const nomeUsuario = usuarioLogado.nome || "";
    const emailUsuario = usuarioLogado.email || "";

    // =====================================
    // FILTRA AS DOAÇÕES DO USUÁRIO
    // =====================================

    const minhasDoacoes = doacoes.filter(function(doacao) {

    // Verifica pelo ID do usuário
    if (
        doacao.usuarioId &&
        (
            doacao.usuarioId === nomeUsuario ||
            doacao.usuarioId === emailUsuario
        )
    ) {
        return true;
    }

    // Verifica pelo nome do usuário
    if (
        doacao.usuario &&
        doacao.usuario === nomeUsuario
    ) {
        return true;
    }

    // Verifica pelo e-mail da doação
    if (
        doacao.email &&
        doacao.email === emailUsuario
    ) {
        return true;
    }

    return false;

});
    // =====================================
    // VERIFICA SE EXISTEM DOAÇÕES
    // =====================================

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

    // =====================================
    // MOSTRA AS DOAÇÕES
    // =====================================

    else {

        lista.innerHTML = "";

        minhasDoacoes.forEach(function(doacao) {

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
                        `<div class="sem-imagem">
                            Sem imagem
                        </div>`
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

    // =====================================
    // VER DETALHES DA DOAÇÃO
    // =====================================

    window.verDetalhes = function(id) {

        localStorage.setItem(
            "doacaoSelecionada",
            id
        );

        window.location.href = "detalhe.html";

    };

    // =====================================
    // ATUALIZA O ANO DO RODAPÉ
    // =====================================

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

    }

}