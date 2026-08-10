// =====================================
// DOALINK - ADMIN
// =====================================

// =====================================
// VERIFICAÇÃO ADMINISTRATIVA
// =====================================

const adminLogado =
    localStorage.getItem("adminLogado");

if (adminLogado !== "true") {

    alert("Acesso restrito ao administrador.");

    window.location.href = "admin-login.html";

}

// Busca os dados armazenados
let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

let doacoes =
    JSON.parse(localStorage.getItem("doacoes")) || [];

let mensagens =
    JSON.parse(localStorage.getItem("mensagens")) || [];


// =============================
// ESTATÍSTICAS
// =============================

document.getElementById("totalUsuarios").textContent =
    usuarios.length;

document.getElementById("totalDoacoes").textContent =
    doacoes.length;

document.getElementById("totalMensagens").textContent =
    mensagens.length;


// Conta cidades diferentes
const cidades = [
    ...new Set(
        doacoes
            .map(doacao => doacao.cidade)
            .filter(cidade => cidade)
    )
];

document.getElementById("totalCidades").textContent =
    cidades.length;


// =============================
// LISTA DE DOAÇÕES
// =============================

const listaDoacoes =
    document.getElementById("listaDoacoes");

function carregarDoacoes() {

    listaDoacoes.innerHTML = "";

    if (doacoes.length === 0) {

        listaDoacoes.innerHTML = `
        
            <div class="admin-card">
            
                <p>Nenhuma doação cadastrada.</p>
            
            </div>
        
        `;

        return;

    }


    doacoes.forEach(doacao => {

        listaDoacoes.innerHTML += `
        
            <div class="admin-card">
            
                <div>
                
                    <h3>${doacao.titulo}</h3>
                
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
                
                </div>
                
                
                <button onclick="excluirDoacao(${doacao.id})">
                
                    Excluir
                
                </button>
            
            </div>
        
        `;

    });

}

carregarDoacoes();


// =============================
// EXCLUIR DOAÇÃO
// =============================

function excluirDoacao(id) {

    const confirmar =
        confirm("Deseja realmente excluir esta doação?");

    if (!confirmar) {

        return;

    }


    doacoes =
        doacoes.filter(doacao => doacao.id != id);


    localStorage.setItem(
        "doacoes",
        JSON.stringify(doacoes)
    );


    alert("Doação excluída com sucesso!");


    location.reload();

}


// =============================
// LISTA DE USUÁRIOS
// =============================

const listaUsuarios =
    document.getElementById("listaUsuarios");

function carregarUsuarios() {

    listaUsuarios.innerHTML = "";

    if (usuarios.length === 0) {

        listaUsuarios.innerHTML = `
        
            <div class="admin-card">
            
                <p>Nenhum usuário cadastrado.</p>
            
            </div>
        
        `;

        return;

    }


    usuarios.forEach(usuario => {

        listaUsuarios.innerHTML += `
        
            <div class="admin-card">
            
                <div>
                
                    <h3>${usuario.nome}</h3>
                
                    <p>
                        <strong>E-mail:</strong>
                        ${usuario.email || "Não informado"}
                    </p>
                
                </div>
            
            </div>
        
        `;

    });

}

carregarUsuarios();


// =============================
// RODAPÉ
// =============================

document.querySelector("footer p").textContent =
    `© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;