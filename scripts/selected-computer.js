import { urlSearch } from "./selected-user.js";

const btnsSelectComputer = document.querySelectorAll(
  ".game__selected--computer > button"
);
const urlSearchComputer = Number(urlSearch.get("computer"));

btnsSelectComputer.forEach((btnComputer, indexComputer) => {
  setTimeout(() => {
    if (indexComputer === urlSearchComputer) {
      btnComputer.classList.remove("none");
    }
  }, 1500);
});

export { btnsSelectComputer, urlSearchComputer };
