let hasPickedCard = false;
let firstCard;
let secondCard;


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
  }

  console.log(firstCard, secondCard)
}

let cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));