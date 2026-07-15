// =====================================
// DOALINK - FAVORITOS
// =====================================

// Atualiza o rodapé
document.querySelector("footer p").textContent =
`© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;

// Busca todas as doações
const doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

// Busca os favoritos
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Área onde os cards serão exibidos
const lista = document.getElementById("listaFavoritos");

// Se não houver favoritos
if(favoritos.length === 0){

    lista.innerHTML = `

    <div style="width:100%;text-align:center;padding:60px;">

        <h2>Você ainda não possui favoritos ❤️</h2>

        <p>Adicione uma doação aos favoritos para vê-la aqui.</p>

    </div>

    `;

}else{

    favoritos.forEach(id=>{

        const doacao = doacoes.find(item=>item.id==id);

        if(doacao){

            lista.innerHTML += `

            <div class="card">

                <img src="${doacao.imagem}" alt="${doacao.titulo}">

                <h3>${doacao.titulo}</h3>

                <p>${doacao.descricao}</p>

                <p><strong>Categoria:</strong> ${doacao.categoria}</p>

                <p><strong>Cidade:</strong> ${doacao.cidade}</p>

                <button onclick="removerFavorito(${doacao.id})">

                    Remover ❤️

                </button>

            </div>

            `;

        }

    });

}

// Remove favorito

function removerFavorito(id){

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    favoritos = favoritos.filter(item => item != id);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    location.reload();

}