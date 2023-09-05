let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeWinner = document.getElementById("home-winner");
let guestWinner = document.getElementById("guest-winner");

let homeCount = 0;
let guestCount = 0;

function scoreUpdate(team, point) {
  if (team === "home") {
    homeCount += point;
    homeScore.innerText = homeCount;
    whoIsTheWinner();
  }

  if (team === "guest") {
    guestCount += point;
    guestScore.innerText = guestCount;
    whoIsTheWinner();
  }
}

function Reset() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  homeCount = 0;
  guestCount = 0;
}

function whoIsTheWinner() {
  if (homeCount > guestCount) {
    homeWinner.textContent = "winner";
    guestWinner.textContent = "loser";
  }
  if (homeCount < guestCount) {
    homeWinner.textContent = "loser";
    guestWinner.textContent = "winner";
  }
  if (homeCount === guestCount) {
    homeWinner.textContent = "draw";
    guestWinner.textContent = "drew";
  }
}
