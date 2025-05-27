const btnsSelectUser = document.querySelectorAll(
  ".game__selected--user > button"
);
const btnsChoicesUser = document.querySelectorAll(".game__btns > button");

const randomSelectComputer = (min = 0, max = 2) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const resultRandomComputer = randomSelectComputer();

btnsChoicesUser.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const btnsIndexUser = index;
    window.location.href = `./result.html?user=${btnsIndexUser}&computer=${resultRandomComputer}`;
  });
});

const url = new URL(window.location.href);
const urlSearch = new URLSearchParams(url.search);
const urlSearchUser = Number(urlSearch.get("user"));

btnsSelectUser.forEach((btnUser, indexUser) => {
  if (indexUser === urlSearchUser) {
    btnUser.classList.remove("none");
  }
});

export { btnsSelectUser, urlSearch, urlSearchUser };
