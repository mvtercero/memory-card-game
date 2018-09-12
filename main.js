
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

let hasPickedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasPickedCard) {
    hasPickedCard = true;
    firstCard = this;

    return;
  }

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
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasPickedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null]
}
