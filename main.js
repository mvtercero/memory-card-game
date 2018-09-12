
function flipCard() {
  console.log('he clickado')
  console.log(this);
  this.classList.toggle('flip');
}

let cards = document.querySelectorAll('.memory-card');
console.log(cards)
cards.forEach(card => card.addEventListener('click', flipCard));