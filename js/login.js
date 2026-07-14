// =====================================
// DOALINK - LOGIN
// =====================================

const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    // Recupera os usuários cadastrados
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Procura um usuário com o e-mail e senha informados
    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {

        // Salva o usuário logado
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

        alert("Login realizado com sucesso!");

        window.location.href = "home.html";

    } else {

        alert("E-mail ou senha incorretos!");

    }

});