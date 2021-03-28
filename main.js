const score = document.querySelector(".score");
const select = document.querySelector(".select");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const winner = [0, 0];

buttons.forEach((btn) => {
  btn.addEventListener("click", playGame);
});

function playGame(e) {
  let playerSelect = e.target.innerText;
  let computerSelect = Math.random();

  if (computerSelect < 0.33) {
    computerSelect = "グー";
  } else if (computerSelect < 0.66) {
    computerSelect = "チョキ";
  } else {
    computerSelect = "パー";
  }
  let result = checkWinner(playerSelect, computerSelect);

  if (result === "あいこ") {
    result = "あいこで";
    showMessage(result, playerSelect, computerSelect);
    return;
  }

  result === "あなた" ? winner[0]++ : winner[1]++;
  showMessage(result, playerSelect, computerSelect);
}

function showMessage(result, playerSelect, computerSelect) {
  if (result === "あいこで") {
    message.textContent = result;
    select.textContent = `あなたは${playerSelect}で、コンピュータも${computerSelect}でした`;
    return;
  } else {
    message.textContent = result += "の勝ち";
  }

  score.innerHTML = `あなた${winner[0]}勝 コンピュータ${winner[1]}勝`;
}

function checkWinner(player, computer) {
  let result;
  if (player === computer) {
    return "あいこ";
  }
  switch (player) {
    case "グー":
      result = computer === "チョキ" ? "あなた" : "コンピュータ";
      break;
    case "チョキ":
      result = computer === "パー" ? "あなた" : "コンピュータ";
      break;
    case "パー":
      result = computer === "グー" ? "あなた" : "コンピュータ";
  }
  return result;
}
