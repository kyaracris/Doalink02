// =====================================
// DOALINK - Página Inicial
// =====================================

// Mensagem de boas-vindas
window.addEventListener("load", function () {

    console.log("DOALINK iniciado com sucesso!");

});

// Rolagem suave do menu
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Animação dos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Ano automático no rodapé
const footer = document.querySelector("footer p");

const ano = new Date().getFullYear();

footer.innerHTML = `© ${ano} DOALINK - Desenvolvimento de uma Plataforma Web para Conectar Doadores e Promover a Solidariedade.`;