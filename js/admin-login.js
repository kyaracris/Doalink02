// =====================================
// DOALINK - LOGIN ADMINISTRATIVO
// =====================================

const formAdmin = document.getElementById("formAdmin");

formAdmin.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario =
        document.getElementById("usuarioAdmin").value.trim();

    const senha =
        document.getElementById("senhaAdmin").value;

    // Dados administrativos para demonstração do TCC
    const usuarioCorreto = "admin";

    const senhaCorreta = "doalink123";

    if (
        usuario === usuarioCorreto &&
        senha === senhaCorreta
    ) {

        localStorage.setItem(
            "adminLogado",
            "true"
        );

        window.location.href = "admin.html";

    } else {

        alert(
            "Usuário ou senha administrativa incorretos."
        );

    }

});