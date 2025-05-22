const btnsSelectUser = [
  ...document.querySelectorAll(".game__selected--user > button"),
];
const btns = [...document.querySelectorAll(".game__btns > button")];

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let btnsIndexUser = index;
    window.location.href = `./result.html?user=${btnsIndexUser}`;
  });
});

const url = new URL(window.location.href);
const urlSearch = new URLSearchParams(url.search);

btnsSelectUser.forEach((btnUser, indexUser) => {
  const n1 = urlSearch.get("user");
  if (indexUser === Number(n1)) {
    btnUser.classList.remove("none");
  }
});

function randomSelectComputer(min = 0, max = 2) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btnsSelectComputer = [
  ...document.querySelectorAll(".game__selected--computer > button"),
];

const resultRandom = randomSelectComputer();
btnsSelectComputer.forEach((btnComputer, indexComputer) => {
  console.log(resultRandom);
  console.log(indexComputer);
  setTimeout(() => {
    if (resultRandom === indexComputer) {
      btnComputer.classList.remove("none");
    } else {
      console.log(false);
    }
  }, 2000);
});
