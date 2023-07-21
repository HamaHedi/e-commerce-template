
const data = [
    { title: 'Next day as standard', text: 'Order before 3pm and get your order the next day as standard', icon: "fa-truck-fast" },
    { title: 'Made by true artisans', text: 'Handmade crafted goods made with real passion and craftmanship', icon: 'fa-circle-check' },
    { title: 'Unbeatable prices', text: 'For our materials and quality you won’t find better prices anywhere', icon: 'fa-credit-card' },
    { title: 'Recycled packaging', text: 'We use 100% recycled to ensure our footprint is more manageable', icon: 'fa-seedling' },

];

function createCard(title, text, icon) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.textContent = text;

    const iconElement = document.createElement('i');
    iconElement.classList.add('fas', icon);

    card.appendChild(iconElement);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    return card;
}

function renderCards() {
    const cardsContainer = document.getElementById('cards-container');

    data.forEach(item => {
        const card = createCard(item.title, item.text, item.icon);
        cardsContainer.appendChild(card);
    });
}

renderCards();