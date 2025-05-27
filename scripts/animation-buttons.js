const btnsGameElement = document.querySelectorAll(".game > button");
const ANIMATION_HOVER = "hoverCircle";
const ANIMATION_HOVER_REVERSE = "hoverCircleReverse";

const addedAnimations = (btn, name) => {
  if (btn.classList.contains("game__animation")) {
    btn.setAttribute("style", `animation: ${name} 0.5s ease forwards;`);
  }
};

btnsGameElement.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const button = e.target.closest("button");
    return addedAnimations(button, ANIMATION_HOVER);
  });

  item.addEventListener("mouseleave", (e) => {
    const button = e.target.closest("button");
    return addedAnimations(button, ANIMATION_HOVER_REVERSE);
  });
});
