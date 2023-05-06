// Indicateur
const selector = document.querySelector('.selector');
// Tous les items
const items = [...document.querySelectorAll('.item')];
// Item courant
let current = document.querySelector('.current');

for (const item of items) {
    item.addEventListener('click', handleClick);
}

function handleClick(e) {
    // L'item cliqué devient l'item courant
    current = e.target;
    // On identifie dans le tableau des items l'item courant
    currentIndex = items.findIndex(item => item === current);
    // On remet tous les items à l'état initial
    items.map((item) => item.className = "item");
    // On "active" l'item courant
    current.classList.add('current');
    // On déplace le selector à la position de l'item courant
    selector.style.transform = `translateX(${100 * current.getAttribute('data-index')}%)`;
}