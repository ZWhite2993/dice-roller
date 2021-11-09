let scoreBoard = document.getElementById("scoreBoard");
let qtyBtnOne = document.getElementById("qtyBtn1");
let qtyBtnTwo = document.getElementById("qtyBtn2");
let qtyBtnThree = document.getElementById("qtyBtn3");
let qtyBtnFour = document.getElementById("qtyBtn4");
let qtyBtnFive = document.getElementById("qtyBtn5");
let qtyBtnSix = document.getElementById("qtyBtn6");
let fourSided = document.getElementById("1d4");
let sixSided = document.getElementById("1d6");
let eightSided = document.getElementById("1d8");
let tenSided = document.getElementById("1d10");
let twelveSided = document.getElementById("1d12");
let twentySided = document.getElementById("1d20");
let rollDice = document.getElementById("rollBtn");
let muteBtn = document.getElementById("muteBtn");
let clearBtn = document.getElementById("clearBtn");
let storedQty = 0;
let storedType = 0;
let audio = new Audio("yt5s.com - Dice Roll Sound Effect _ Rolling dice sound (128 kbps).mp3");

qtyBtnOne.addEventListener("click", qtyGet);
qtyBtnTwo.addEventListener("click", qtyGet);
qtyBtnThree.addEventListener("click", qtyGet);
qtyBtnFour.addEventListener("click", qtyGet);
qtyBtnFive.addEventListener("click", qtyGet);
qtyBtnSix.addEventListener("click", qtyGet);

fourSided.addEventListener("click", diceTypeGet);
sixSided.addEventListener("click", diceTypeGet);
eightSided.addEventListener("click", diceTypeGet);
tenSided.addEventListener("click", diceTypeGet);
twelveSided.addEventListener("click", diceTypeGet);
twentySided.addEventListener("click", diceTypeGet);

rollDice.addEventListener("click", calcRollValue);
muteBtn.addEventListener("click", muteSound);
clearBtn.addEventListener("click", clearSelections);

function qtyGet(event) {
  storedQty = +event.target.value;
  scoreBoard.innerHTML = storedQty;
}

function diceTypeGet(event){
  storedType = +event.target.value;

  if(storedQty === 1){
    scoreBoard.innerHTML = storedQty + " " + storedType + " sided die.";
  } else {
  scoreBoard.innerHTML = storedQty + " " + storedType + " sided dice.";
  }
}

function calcRollValue() {
  scoreBoard.innerHTML = Math.floor(Math.random() * storedQty * storedType) + 1;
  audio.play();
}

function clearSelections() {
  scoreBoard.innerHTML = "";
}

function muteSound() {
  audio.muted = true;
}
