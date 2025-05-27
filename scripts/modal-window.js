const $ = (selector) => document.querySelector(selector);

const btnModalOpen = $(".btn__rules-open");
const btnModalClose = $(".btn__rules-close");
const modalElement = $(".modalWindow");

const MODAL_OPEN = "modalOpen";
const MODAL_CLOSE = "modalClose";

const toggleModalVisibility = (firstNameClass, secondtNameClass) => {
  return modalElement.classList.replace(firstNameClass, secondtNameClass);
};

btnModalOpen.addEventListener("click", () => {
  toggleModalVisibility(MODAL_CLOSE, MODAL_OPEN);
});

btnModalClose.addEventListener("click", () => {
  toggleModalVisibility(MODAL_OPEN, MODAL_CLOSE);
});

export { $ };
