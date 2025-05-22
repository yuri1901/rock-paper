const btnModalOpen = document.querySelector(".btn__rules-open");
const btnModalClose = document.querySelector(".btn__rules-close");
const modalElement = document.querySelector(".modalWindow");

btnModalOpen.addEventListener("click", () => {
  modalElement.classList.replace("modalClose", "modalOpen");
});

btnModalClose.addEventListener("click", () => {
  modalElement.classList.replace("modalOpen", "modalClose");
});

const btnsGameElement = document.querySelectorAll(".game > button");

const setAnimation = (btn, name) => {
  if (btn.classList.contains("game__animation")) {
    btn.setAttribute("style", `animation: ${name} 0.5s ease forwards;`);
  }
};

btnsGameElement.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const button = e.target.closest("button");
    return setAnimation(button, "hoverCircle");
  });
  item.addEventListener("mouseleave", (e) => {
    const button = e.target.closest("button");
    return setAnimation(button, "hoverCircleReverse");
  });
});
