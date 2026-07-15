// Busca usuários e doações

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// Lista usuários

const listaUsuarios = document.getElementById("usuarios");

function carregarUsuarios(){

    listaUsuarios.innerHTML = "";

    usuarios.forEach((usuario,index)=>{

        listaUsuarios.innerHTML += `

        <div class="item">

            <strong>${usuario.nome}</strong><br>

            ${usuario.email}

            <br>

            <button onclick="excluirUsuario(${index})">

                Excluir Usuário

            </button>

        </div>

        `;

    });

}

carregarUsuarios();

// Lista doações

const listaDoacoes = document.getElementById("doacoes");

function carregarDoacoes(){

    listaDoacoes.innerHTML="";

    doacoes.forEach((doacao,index)=>{

        listaDoacoes.innerHTML +=`

        <div class="item">

            <strong>${doacao.titulo}</strong><br>

            ${doacao.usuario}<br>

            ${doacao.cidade}

            <br>

            <button onclick="excluirDoacao(${index})">

                Excluir Doação

            </button>

        </div>

        `;

    });

}

carregarDoacoes();

// Excluir usuário

function excluirUsuario(index){

    if(confirm("Deseja excluir este usuário?")){

        usuarios.splice(index,1);

        localStorage.setItem("usuarios",JSON.stringify(usuarios));

        carregarUsuarios();

    }

}

// Excluir doação

function excluirDoacao(index){

    if(confirm("Deseja excluir esta doação?")){

        doacoes.splice(index,1);

        localStorage.setItem("doacoes",JSON.stringify(doacoes));

        carregarDoacoes();

    }

}