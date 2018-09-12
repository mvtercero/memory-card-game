
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

let hasPickedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

function flipCard() {
  if (lockBoard) return;
  this.classList.add('flip');

  if (!hasPickedCard) {
    hasPickedCard = true;
    firstCard = this;

    return;
  }

  hasPickedCard = false;
  secondCard = this;
  checkForMatch();

}


function checkForMatch() {
  let isMatch = firstCard.dataset.key === secondCard.dataset.key;
  isMatch ? disabledCards() : unflipCards();
}

function disabledCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
  }, 1500);
}
