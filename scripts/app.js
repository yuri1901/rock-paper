const btnModalOpen = document.querySelector(".btn__rules-open");
const btnModalClose = document.querySelector(".btn__rules-close");
const modalElement = document.querySelector(".modalWindow");

btnModalOpen.addEventListener("click", () => {
  if (modalElement.classList.contains("modalClose")) {
    modalElement.classList.remove("modalClose");
    modalElement.classList.add("modalOpen");
  }
});

btnModalClose.addEventListener("click", () => {
  if (modalElement.classList.contains("modalOpen")) {
    modalElement.classList.remove("modalOpen");
    modalElement.classList.add("modalClose");
  }
});
