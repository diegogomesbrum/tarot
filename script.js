const cards = [
    { image: "imagem/mago.jpg", meaning: "O Mago: Representa poder, habilidade e novas oportunidades." },
    { image: "imagem/sacerdotisa.jpg", meaning: "A Sacerdotisa: Simboliza sabedoria interior e intuição." },
    { image: "imagem/roda.jpg", meaning: "A Roda da Fortuna: Significa mudanças e ciclos da vida." },
    { image: "imagem/imperatriz.jpg", meaning: "A Imperatriz: Significa o poder da beleza e da riqueza." },
    { image: "imagem/louco.jpg", meaning: "O Louco: Simboliza novos começos e novas experiências." },
    { image: "imagem/torre.jpg", meaning: "A Torre: Mudanças abruptas e inesperadas." },
    { image: "imagem/imperador.jpg", meaning: "O Imperador: Indica liderança, estrutura e autoridade." },
    { image: "imagem/enamorados.jpg", meaning: "Os Enamorados: Representa escolhas, relacionamentos e harmonia." },
    { image: "imagem/carro.jpg", meaning: "O Carro: Simboliza determinação, direção e controle sobre a vida." },
    { image: "imagem/forca.jpg", meaning: "A Força: Indica coragem, autocontrole e compaixão." },
    { image: "imagem/eremita.jpg", meaning: "O Eremita: Representa introspecção, sabedoria e busca interior." },
    { image: "imagem/justica.jpg", meaning: "A Justiça: Indica verdade, equilíbrio e responsabilidade." },
    { image: "imagem/enforcado.jpg", meaning: "O Enforcado: Simboliza sacrifício, novos pontos de vista e pausa." },
    { image: "imagem/morte.jpg", meaning: "A Morte: Representa transformação, finais e renascimentos." },
    { image: "imagem/temperanca.jpg", meaning: "A Temperança: Simboliza equilíbrio, paciência e moderação." },
    { image: "imagem/diabo.jpg", meaning: "O Diabo: Indica tentações, excessos e apegos materiais." },
    { image: "imagem/estrela.jpg", meaning: "A Estrela: Representa esperança, inspiração e renovação." },
    { image: "imagem/lua.jpg", meaning: "A Lua: Simboliza ilusões, mistérios e intuição e a Karina." },
    { image: "imagem/sol.jpg", meaning: "O Sol: Indica sucesso, alegria e clareza." },
    { image: "imagem/julgamento.jpg", meaning: "O Julgamento: Representa renascimento, reflexão e decisões." },
    { image: "imagem/mundo.jpg", meaning: "O Mundo: Indica conclusão, realização e harmonia." },
    { image: "imagem/mundo.jpg", meaning: "O Papa: Indica a busca poder superior, favorece uma nova chance de elevação espiritual." }
];

// Função para criar as cartas dinamicamente e organizá-las em forma de leque
function generateCards() {
    const cardsContainer = document.querySelector('.cards');
    const totalCards = cards.length;
    const angleStep = 30; // Ângulo entre as cartas no leque
    const startAngle = -(angleStep * (totalCards - 1)) / 2; // Calcula o ângulo inicial

    cards.forEach((card, index) => {
        const angle = startAngle + index * angleStep; // Calcula o ângulo para cada carta

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.transform = `rotate(${angle}deg) translateY(-20px)`;
        cardElement.onclick = () => revealCard(index);

        const cardImage = document.createElement('img');
        cardImage.src = "imagem/virada.jpg"; // Imagem da carta virada
        cardImage.alt = `Carta ${index + 1}`;

        cardElement.appendChild(cardImage);
        cardsContainer.appendChild(cardElement);
    });
}

// Função para revelar a carta escolhida
function revealCard(index) {
    const resultDiv = document.getElementById('result');
    const revealedImage = document.getElementById('revealedImage');
    const meaning = document.getElementById('meaning');

    revealedImage.src = cards[index].image; // Define a imagem da carta revelada
    meaning.textContent = cards[index].meaning; // Define o significado da carta revelada
    resultDiv.style.display = 'block'; // Exibe o resultado
}

// Gera as cartas ao carregar a página
window.onload = generateCards;




