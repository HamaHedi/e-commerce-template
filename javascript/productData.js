const productData = [
    { title: 'The Dandy chair', text: '£250', imageSrc: './images/product1.png' },
    { title: 'Rustic Vase Set', text: '£155', imageSrc: './images/product3.png' },
    { title: 'The Silky Vase', text: '£125', imageSrc: './images/product2.png' },
    { title: 'The Lucy Lamp', text: '£399', imageSrc: './images/product4.png' },
    { title: 'The Dandy chair', text: '£250', imageSrc: './images/product1.png' },
    { title: 'Rustic Vase Set', text: '£155', imageSrc: './images/product3.png' },
    { title: 'The Silky Vase', text: '£125', imageSrc: './images/product2.png' },
    { title: 'The Lucy Lamp', text: '£399', imageSrc: './images/product4.png' },
    { title: 'The Dandy chair', text: '£250', imageSrc: './images/product1.png' },
    { title: 'Rustic Vase Set', text: '£155', imageSrc: './images/product3.png' },
    { title: 'The Silky Vase', text: '£125', imageSrc: './images/product2.png' },
    { title: 'The Lucy Lamp', text: '£399', imageSrc: './images/product4.png' },
];

function createCard(title, text, imageSrc) {
    const card = document.createElement('div');
    card.classList.add('productCard');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.textContent = text;

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;

    card.appendChild(imageElement);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    return card;
}

function renderCards() {
    const cardsContainer = document.getElementById('products-cards-container');

    productData.forEach(item => {
        const card = createCard(item.title, item.text, item.imageSrc);
        cardsContainer.appendChild(card);
    });
}

renderCards();