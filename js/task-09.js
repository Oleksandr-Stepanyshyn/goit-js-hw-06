function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');
const bodyEl = document.body;

function onButtonClick (event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = bodyEl.style.backgroundColor;
};

buttonEl.addEventListener('click', onButtonClick);