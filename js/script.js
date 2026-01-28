let money = 0;

const moneySum = document.getElementById("OTC");
const TB = document.getElementById("TB");
const ponziSound = document.getElementById("ponziSound");

moneySum.textContent = money;
TB.textContent = "get rick quick scheme frfr";

function becomePonzi() {
  money++;
  moneySum.textContent = money;
  TB.textContent = "get rick quick scheme frfr";

  ponziSound.currentTime = 0; // restart sound
  ponziSound.play();         // play the mp3
}