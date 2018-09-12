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

    //Two cards picked
    console.log(firstCard.dataset.key)
    console.log(secondCard.dataset.key)
  }
}

let cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));