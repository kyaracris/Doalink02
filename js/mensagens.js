// =====================================
// DOALINK - MENSAGENS
// =====================================

const lista = document.getElementById("listaMensagens");

const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

if(mensagens.length == 0){

    lista.innerHTML = `

    <div class="cardMensagem">

        <h3>Nenhuma mensagem recebida.</h3>

    </div>

    `;

}else{

    mensagens.forEach(msg=>{

        lista.innerHTML += `

        <div class="cardMensagem">

            <h3>${msg.titulo}</h3>

            <p><strong>Nome:</strong> ${msg.nome}</p>

            <p><strong>Telefone:</strong> ${msg.telefone}</p>

            <p><strong>Mensagem:</strong></p>

            <p>${msg.mensagem}</p>

        </div>

        `;

    });

}

document.querySelector("footer p").textContent =
`© ${new Date().getFullYear()} DOALINK - Todos os direitos reservados.`;