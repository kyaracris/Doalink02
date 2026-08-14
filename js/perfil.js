// =====================================
// DOALINK - MEU PERFIL
// =====================================

// Recupera o usuário logado
const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
);

// Verifica se existe usuário logado
if (!usuarioLogado) {

    alert("Faça login para acessar seu perfil.");

    window.location.href = "login.html";

} else {

    // =====================================
    // DADOS DO USUÁRIO
    // =====================================

    const nome = usuarioLogado.nome || "Usuário";
    const email = usuarioLogado.email || "Não informado";


    // =====================================
    // MOSTRA NOME E E-MAIL
    // =====================================

    const nomeCompleto =
        document.getElementById("nomeCompleto");

    const emailCompleto =
        document.getElementById("emailCompleto");


    if (nomeCompleto) {
        nomeCompleto.textContent = nome;
    }

    if (emailCompleto) {
        emailCompleto.textContent = email;
    }


    // =====================================
    // BUSCA AS DOAÇÕES
    // =====================================

    const doacoes = JSON.parse(
        localStorage.getItem("doacoes")
    ) || [];


    // =====================================
    // CONTA SOMENTE AS DOAÇÕES DO USUÁRIO
    // =====================================

    const minhasDoacoes = doacoes.filter(function(doacao) {

        return (
            doacao.usuario === nome ||
            doacao.email === email ||
            doacao.usuarioId === nome ||
            doacao.usuarioId === email
        );

    });


    // =====================================
    // MOSTRA TOTAL DE DOAÇÕES
    // =====================================

    const totalDoacoes =
        document.getElementById("totalDoacoes");

    if (totalDoacoes) {

        totalDoacoes.textContent =
            minhasDoacoes.length;

    }


    // =====================================
    // BUSCA OS FAVORITOS
    // =====================================

    const favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];


    // =====================================
    // MOSTRA TOTAL DE FAVORITOS
    // =====================================

    const totalFavoritos =
        document.getElementById("totalFavoritos");

    if (totalFavoritos) {

        totalFavoritos.textContent =
            favoritos.length;

    }


    // =====================================
    // BOTÃO SAIR DA CONTA
    // =====================================

    const btnSair =
        document.getElementById("btnSair");

    if (btnSair) {

        btnSair.addEventListener("click", function() {

            const confirmar =
                confirm("Deseja realmente sair da sua conta?");

            if (confirmar) {

                localStorage.removeItem("usuarioLogado");

                window.location.href = "login.html";

            }

        });

    }


    // =====================================
    // ATUALIZA O ANO DO RODAPÉ
    // =====================================

    const footer =
        document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

    }

}