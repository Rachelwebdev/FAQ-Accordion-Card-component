"use strict";
const arrowInvert = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".answer");

// for (let i = 0; i < arrowInvert.length; i++) {
//   arrowInvert[i].addEventListener("click", () => {
//     arrowInvert[i].classList.toggle("display");
//     answer[i].classList.toggle("show");
//   });
// }

for (let i = 0; i < arrowInvert.length; i++) {
  arrowInvert[i].addEventListener("click", () => {
    arrowInvert[i].classList.toggle("display");
    answer[i].classList.toggle("show");
  });
  arrowInvert[i].addEventListener("mouseover", () => {
    arrowInvert[i].classList.toggle("display");
    answer[i].classList.toggle("show");
  });
}
