


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
        <li>
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

// rodando as funções do site
document.addEventListener('DOMContentLoaded', function() {
ativarMenu('#navbar_cardapio_list li');
renderizarCards(mais_pedidos, 'mais_pedidos_id');
renderizarCards(sanduiches_carne, 'sanduiches_carne_id');
renderizarCards(sanduiches_frango, 'sanduiches_frango_id');
});