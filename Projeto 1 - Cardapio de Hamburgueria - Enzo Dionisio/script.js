


// Definindo variveis dos cards
const mais_pedidos = [
    { nome: "Cheeseburger", img: "resources/hambuguer_2.png" },
    { nome: "X-Bacon", img: "resources/hambuguer_2.png" },
    { nome: "Veggie Burger", img: "resources/hambuguer_2.png" },
    { nome: "Chicken Burger", img: "resources/hambuguer_2.png" }
];

const sanduiches_carne = [
    { nome: "Cheeseburger", img: "resources/hambuguer_2.png" },
    { nome: "X-Bacon", img: "resources/hambuguer_2.png" },
    { nome: "Veggie Burger", img: "resources/hambuguer_2.png" },
    { nome: "Chicken Burger", img: "resources/hambuguer_2.png" },
    { nome: "Cheeseburger", img: "resources/hambuguer_2.png" },
    { nome: "X-Bacon", img: "resources/hambuguer_2.png" },
    { nome: "Veggie Burger", img: "resources/hambuguer_2.png" },
    { nome: "Chicken Burger", img: "resources/hambuguer_2.png" }
];   

const sanduiches_frango = [
    { nome: "Cheeseburger", img: "resources/hambuguer_2.png" },
    { nome: "X-Bacon", img: "resources/hambuguer_2.png" },
    { nome: "Veggie Burger", img: "resources/hambuguer_2.png" },
    { nome: "Chicken Burger", img: "resources/hambuguer_2.png" },
    { nome: "Cheeseburger", img: "resources/hambuguer_2.png" },
    { nome: "X-Bacon", img: "resources/hambuguer_2.png" },
    { nome: "Veggie Burger", img: "resources/hambuguer_2.png" },
    { nome: "Chicken Burger", img: "resources/hambuguer_2.png" }
];

// Função para renderizar os cards dinamicamente
function renderizarCards(lista, idElemento) {
    document.getElementById(idElemento).innerHTML = lista.map(item => `
        <li class = "card_li" data-destino="info_produto.html" id="${item.nome.replace(/\s+/g, '_').toLowerCase()}">
            <div class="card">
                <div class="card_prod">
                    <img src="${item.img}" alt="${item.nome}">
                </div>
                <div class="card_nome">
                    <p>${item.nome}</p>
                </div>
            </div>
        </li>
`).join('');
}

function renderizarInfoProduto(lista, idElemento) {
    document.getElementById(idElemento).innerHTML = lista.map(item => `
        <li data-destino="info_produto.html" >
            <div class="card">
                <div class="card_prod">
                    <img src="${item.img}" alt="${item.nome}">
                </div>
                <div class="card_nome">
                    <p>${item.nome}</p>
                </div>
            </div>
        </li>
`).join('');
}

// função paraa ativar navbar
function ativarMenu(navbarSelector, classeAtiva = 'ativo') {
    const navbarItems = document.querySelectorAll(navbarSelector);
    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarItems.forEach(li => li.classList.remove(classeAtiva));
            this.classList.add(classeAtiva);
        });
    });
}


// Função genérica para ativar redirecionamentos via data-destino
function ativarRedirecionamentos() {
    document.querySelectorAll("[data-destino]").forEach(el => {
        el.addEventListener("click", () => {
            window.location.href = el.dataset.destino;
        });
    });
}


// rodando as funções do site
document.addEventListener('DOMContentLoaded', function() {
ativarRedirecionamentos();
ativarMenu('#navbar_cardapio_list li');
renderizarCards(mais_pedidos, 'mais_pedidos_id');
renderizarCards(sanduiches_carne, 'sanduiches_carne_id');
renderizarCards(sanduiches_frango, 'sanduiches_frango_id');
ativarRedirecionamentos();
});

