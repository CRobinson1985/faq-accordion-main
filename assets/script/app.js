'use strict';
const helpButton = document.getElementById("help-star");
const freeButton =  document.getElementById("free-star");
const portfolioButton = document.getElementById("portfolio-star");
const challengeButton = document.getElementById("challenge-star");
const helpText = document.getElementById('fem-help-section');
const freeText = document.getElementById('free-section');
const portfolioText = document.getElementById('portfolio-section');
const challengeText = document.getElementById('challenge-section');
const questionText = document.querySelectorAll('h5');
console.log(questionText);
const swapItems = (button, text) => {
  if (button.className === "plus-img") {
    button.className = "minus-img";
    button.src = "/assets/images/icon-minus.svg";
    text.style.display = "block";
  } else if (button.className === "minus-img") {
    button.className = "plus-img";
    button.src = "/assets/images/icon-plus.svg";
    text.style.display = "none";
  }
}

helpButton.addEventListener("click" , () => {swapItems(helpButton, helpText)});
freeButton.addEventListener("click" ,  () => {swapItems(freeButton, freeText)});
portfolioButton.addEventListener("click" , () => {swapItems(portfolioButton, portfolioText)});
challengeButton.addEventListener("click" , () => {swapItems(challengeButton, challengeText)});
questionText[0].addEventListener("click" , () => {swapItems(helpButton, helpText)});
questionText[1].addEventListener("click" ,  () => {swapItems(freeButton, freeText)});
questionText[2].addEventListener("click" , () => {swapItems(portfolioButton, portfolioText)});
questionText[3].addEventListener("click" , () => {swapItems(challengeButton, challengeText)});
