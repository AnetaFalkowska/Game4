const cards = document.querySelectorAll(".card");
const cardsArray = ["yellow", "red", "blue", "green"];
const gameStatus = document.querySelector("#game-status");
let computerSequence = [];
let userSequence = [];
let level = 0;
let gameStarted = false;

document.addEventListener("keypress", function () {
  if (!gameStarted) {
    nextLevel();
    gameStarted = true
  }
});

cards.forEach((card) => card.addEventListener("click", function() {
  playSound(this.id);
  flash(this.id)
  userSequence.push(this.id);
  let step = userSequence.length - 1;
  checkForMatch(step);
}));

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 4);
  let cardSelected = cardsArray[randomNumber];
  playSound(cardSelected);
  flash(cardSelected)
  computerSequence.push(cardSelected);
}

function checkForMatch(step) {
  if (userSequence[step] == computerSequence[step]) {
    if (step === computerSequence.length - 1) {
      setTimeout(nextLevel, 800)
    }
  } else {
    playSound("wrong")
    gameStatus.innerHTML = "Game over! Press any key to restart";
    level = 0;
    computerSequence = [];
    gameStarted = false
  }
}

function nextLevel() {
  level++;
  gameStatus.innerHTML = "Level:" + level;
  userSequence = [];
  computerChoice();
}

function playSound(card) {  
  let sound = new Audio("./sounds/" + card + ".mp3");
  sound.play()
}

function flash(color) {
  let card = document.querySelector("#" + color)
  card.style.opacity = 0.5;
  setTimeout(() => {
    card.style.opacity = 1;
  }, 100);
}