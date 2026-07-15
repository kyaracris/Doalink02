// Verifica usuário logado
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if(!usuario){

    window.location.href="login.html";

}

// Busca todas as doações
let doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// Filtra apenas as do usuário
let minhas = doacoes.filter(item => item.email === usuario.email);

const lista = document.getElementById("listaDoacoes");

function carregar(){

    lista.innerHTML="";

    if(minhas.length===0){

        lista.innerHTML=`

        <h2 style="grid-column:1/-1;text-align:center;">
        Você ainda não publicou nenhuma doação.
        </h2>

        `;

        return;

    }

    minhas.forEach(doacao=>{

        lista.innerHTML +=`

        <div class="card">

            <img src="${doacao.imagem}">

            <h3>${doacao.titulo}</h3>

            <p>${doacao.descricao}</p>

            <p><strong>Categoria:</strong> ${doacao.categoria}</p>

            <p><strong>Cidade:</strong> ${doacao.cidade}</p>

            <button onclick="excluir(${doacao.id})">

                Excluir

            </button>

        </div>

        `;

    });

}

carregar();

function excluir(id){

    if(!confirm("Deseja realmente excluir esta doação?")){

        return;

    }

    doacoes = doacoes.filter(item=>item.id!==id);

    localStorage.setItem("doacoes",JSON.stringify(doacoes));

    minhas = doacoes.filter(item=>item.email===usuario.email);

    carregar();

    alert("Doação removida com sucesso!");

}