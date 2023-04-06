const cards = document.querySelectorAll(".card");
const cardsArray = ["yellow", "red", "blue", "green"];
const gameStatus = document.querySelector("#game-status");
let computerSequence = [];
let userSequence = [];
let level = 0;


document.addEventListener("keypress", function () {
  nextLevel();  
});

cards.forEach((card) => card.addEventListener("click", pressCard));

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 4);
  let cardSelected = cardsArray[randomNumber];
  computerSequence.push(cardSelected);
}

function pressCard(event) {
  userSequence.push(event.target.id);
  step = userSequence.length - 1;
  checkForMatch(step);
}

function checkForMatch(step) {
  if (userSequence[step] == computerSequence[step]) {
    if (step === computerSequence.length - 1) {
      nextLevel();
    }
  } else {
    gameStatus.innerHTML ="Game over! Press any key to restart"
    level = 0
    computerSequence = []
  }
}

function nextLevel() {
  level++;
  gameStatus.innerHTML = "Level:" + level
  userSequence = [];
  computerChoice();
  console.log(computerSequence);
}

