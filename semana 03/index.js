
const cardBoard = document.querySelector("#cardboard");


const images = [
  "nami.jpg",
  "chopper.jpg",
  "luffy.jpg",
  "sanji.jpg",
  "zoro.jpg",
  "ussop.jpg",
];


let cardHTML = "";


images.forEach((img) => {
  cardHTML += `
    <div class="memory-card" data-card="${img}">
        <img class="front-face" src="./imagens/${img}">
        <img class="back-face" src="./imagens/procura.jpg">
    </div>
    `;
});

cardBoard.innerHTML = cardHTML + cardHTML;


const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCard = false;

function flipCard() {
  
  if (lockCard == true) {
    return false;
  }
  this.classList.add("flip");
  
  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;
  checkForMatch();
}


function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  
  !isMatch ? desableCards() : resetCards(isMatch)
}


function desableCards() {
  lockCard = true;
 
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    
    resetCards()
  }, 1000);
}


(function randomCards(){
    cards.forEach( card => {
        let rand = Math.floor(Math.random()*12)
        card.style.order = rand
    })
})()


function resetCards(isMatch = false) {
    if(isMatch) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    }
    [firstCard, secondCard, lockCard] = [null, null, false]
}

cards.forEach((card) => card.addEventListener("click", flipCard));