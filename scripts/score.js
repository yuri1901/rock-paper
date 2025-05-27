import { $ } from "./modal-window.js";

const score = $(".score__content > span");
const value = Number(localStorage.getItem("key")) || 0;

score.textContent = value;
