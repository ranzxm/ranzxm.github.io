const infoMatch = document.querySelector(".suit-jawa .info-match");
const imgComputer = document.querySelector(".img-computer");
const playerPick = document.querySelectorAll("li img");
const playerScoreQuery = document.querySelector(".score-player");
const computerScoreQuery = document.querySelector(".score-computer");
const resetScoreMatch = document.querySelector(".reset-score");

let defaultScorePlayer = 1;
let defaultScoreComputer = 1;
playerScoreQuery.innerHTML = 0;
computerScoreQuery.innerHTML = 0;

function randomPickComputer() {
  const randomNum = Math.random();
  if (randomNum < 0.35) return "gajah";
  if (randomNum > 0.35 && randomNum < 0.65) return "semut";
  if (randomNum > 0.65) return "orang";
}

function acakGambar() {
  const gambar = ["gajah", "orang", "semut"];
  const waktuMulai = new Date().getTime();
  let i = 0;
  infoMatch.innerHTML = "tunggu 😁";
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute("src", `../img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
}

function rulesGame(player, computer) {
  if (player == computer) return "Seri";
  if (player == "gajah") return computer == "orang" ? "Menang" : "Kalah";
  if (player == "orang") return computer == "semut" ? "Menang" : "Kalah";
  if (player == "semut") return computer == "gajah" ? "Menang" : "Kalah";
}

playerPick.forEach(function (picking) {
  picking.addEventListener("click", function () {
    const playerPicking = picking.className;
    const computerPick = randomPickComputer();
    acakGambar();

    setTimeout(function () {
      const resultGame = rulesGame(playerPicking, computerPick);
      imgComputer.setAttribute("src", `../img/${computerPick}.png`);
      infoMatch.innerHTML = resultGame;
      if (resultGame == "Menang") playerScoreQuery.innerHTML = defaultScorePlayer++;
      if (resultGame == "Kalah") computerScoreQuery.innerHTML = defaultScoreComputer++;
    }, 1000);
  });
});

resetScoreMatch.addEventListener("click", function () {
  defaultScorePlayer = 1;
  defaultScoreComputer = 1;
  playerScoreQuery.innerHTML = 0;
  computerScoreQuery.innerHTML = 0;
});

// pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const playerPick = pGajah.className;
//   const computerPick = randomPickComputer();
//   const resultGame = rulesGame(playerPick, computerPick);
//   imgComputer.setAttribute("src", "../img/" + computerPick + ".png");
//   infoMatch.innerHTML = resultGame;
// });

// pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const playerPick = pSemut.className;
//   const computerPick = randomPickComputer();
//   const resultGame = rulesGame(playerPick, computerPick);
//   imgComputer.setAttribute("src", "../img/" + computerPick + ".png");
//   infoMatch.innerHTML = resultGame;
// });

// pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const playerPick = pOrang.className;
//   const computerPick = randomPickComputer();
//   const resultGame = rulesGame(playerPick, computerPick);
//   imgComputer.setAttribute("src", "../img/" + computerPick + ".png");
//   infoMatch.innerHTML = resultGame;
// });
