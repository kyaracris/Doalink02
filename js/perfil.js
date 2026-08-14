// =====================================
// DOALINK - PERFIL
// =====================================

// Verifica se existe usuário logado
const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
);

if (!usuarioLogado) {

    alert("Faça login para continuar.");

    window.location.href = "login.html";

} else {

    // ================================
    // DADOS DO USUÁRIO
    // ================================

    const nome = usuarioLogado.nome || "Usuário";

    const email = usuarioLogado.email || "E-mail não informado";


    // Mostra nome
    document.getElementById("nomeUsuario").textContent = nome;

    document.getElementById("nomeCompleto").textContent = nome;


    // Mostra e-mail
    document.getElementById("emailUsuario").textContent = email;

    document.getElementById("emailCompleto").textContent = email;


    // ================================
    // BUSCA DOAÇÕES
    // ================================

    const doacoes = JSON.parse(
        localStorage.getItem("doacoes")
    ) || [];


    // Conta somente as doações do usuário
    const minhasDoacoes = doacoes.filter(function(doacao) {

        return (
            doacao.usuario === nome ||
            doacao.email === email
        );

    });


    document.getElementById("totalDoacoes").textContent =
        minhasDoacoes.length;


    // ================================
    // BUSCA FAVORITOS
    // ================================

    const favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];


    document.getElementById("totalFavoritos").textContent =
        favoritos.length;


    // ================================
    // BOTÃO SAIR
    // ================================

    const btnSair = document.getElementById("btnSair");

    btnSair.addEventListener("click", function() {

        const confirmar = confirm(
            "Tem certeza que deseja sair da sua conta?"
        );

        if (confirmar) {

            localStorage.removeItem("usuarioLogado");

            window.location.href = "login.html";

        }

    });


    // ================================
    // ATUALIZA ANO
    // ================================

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

    }

}