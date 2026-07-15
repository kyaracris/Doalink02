// Verifica login
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if(!usuario){

    window.location.href="login.html";

}

// Preenche os campos

document.getElementById("nome").value=usuario.nome;

document.getElementById("email").value=usuario.email;

// Atualizar perfil

document.getElementById("formPerfil").addEventListener("submit",function(e){

    e.preventDefault();

    const novoNome=document.getElementById("nome").value;

    const novoEmail=document.getElementById("email").value;

    const novaSenha=document.getElementById("senha").value;

    let usuarios=JSON.parse(localStorage.getItem("usuarios"))||[];

    usuarios=usuarios.map(u=>{

        if(u.email===usuario.email){

            u.nome=novoNome;

            u.email=novoEmail;

            if(novaSenha!=""){

                u.senha=novaSenha;

            }

        }

        return u;

    });

    localStorage.setItem("usuarios",JSON.stringify(usuarios));

    usuario.nome=novoNome;
    usuario.email=novoEmail;

    if(novaSenha!=""){

        usuario.senha=novaSenha;

    }

    localStorage.setItem("usuarioLogado",JSON.stringify(usuario));

    alert("Perfil atualizado com sucesso!");

});