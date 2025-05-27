import { $ } from "./modal-window.js";
import { urlSearchUser } from "./selected-user.js";
import { urlSearchComputer } from "./selected-computer.js";

const resultGame = $(".result__game");
const resultMessage = $(".result__game strong");
const btnPlayAgain = $(".result__game button");

const showResultMessage = (res) => {
  const winOrLose = {
    win: "you win",
    lose: "you lose",
    draw: "draw",
  };

  setTimeout(() => {
    resultGame.setAttribute("style", "display: block");
  }, 2000);

  switch (res) {
    case "win": {
      resultMessage.textContent = winOrLose.win;
      break;
    }
    case "lose": {
      resultMessage.textContent = winOrLose.lose;
      break;
    }
    case "draw": {
      resultMessage.textContent = winOrLose.draw;
      break;
    }
  }
};

function checkGameResult() {
  const winMap = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  const numberToFigure = {
    0: "paper",
    1: "scissors",
    2: "rock",
  };

  const choiceUser = numberToFigure[urlSearchUser];
  const choiceComputer = numberToFigure[urlSearchComputer];
  const isUserWinner = winMap[choiceUser] === choiceComputer;

  if (choiceUser === choiceComputer) {
    return showResultMessage("draw");
  }
  if (isUserWinner) {
    countValue();
    showResultMessage("win");
    setTimeout(() => {
      document
        .querySelector(".game__selected--user  button:not(.none)")
        .setAttribute("style", "animation: pulseRings 1s ease");
    }, 1500);
    return;
  }
  if (!isUserWinner) {
    setTimeout(() => {
      document
        .querySelector(".game__selected--computer  button:not(.none)")
        .setAttribute("style", "animation: pulseRings 1s ease");
    }, 1500);
    showResultMessage("lose");
    return;
  }
}
checkGameResult();

function countValue() {
  let scoreValue = Number(localStorage.getItem("key")) || 0;
  scoreValue++;
  localStorage.setItem("key", scoreValue);
}
const restartGame = () => {
  return (window.location.href = "./index.html");
};

btnPlayAgain.addEventListener("click", restartGame);

export { countValue };
