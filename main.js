let hasPickedCard = false;
let firstCard, secondCard;


function flipCard() {
  this.classList.add('flip');
  if (!hasPickedCard) {
    //primer click
    hasPickedCard = true;
    firstCard = this;

  } else {
    //segundo click
    hasPickedCard = false;
    secondCard = this;

    //Ha seleccionado dos cartas?
    if (firstCard.dataset.key === secondCard.dataset.key) {
      //Son iguales!
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
      //No son iguales
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }
  }
}

let cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));