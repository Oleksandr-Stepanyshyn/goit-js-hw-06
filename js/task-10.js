function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let count;

function createBoxes(amount) {
  const arrItems = [];

  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement('div');
    const sizeBox = 20 + 10 * i;
    item.style.width = `${sizeBox}px`;
    item.style.height = `${sizeBox}px`;
    item.style.backgroundColor = getRandomHexColor();
    arrItems.push(item);
  }

  boxesEl.append(...arrItems);
};

function onCounterBoxesInput(event) {
  count = event.currentTarget.value;
  console.log(count);
  return count;
};

function onCreateBtnClick(event) {
  createBoxes(count);
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
};

const inputValueEl = document.querySelector('#controls input');
const createBtnEl = inputValueEl.nextElementSibling;
const destroyBtnEl = createBtnEl.nextElementSibling;
const boxesEl = document.querySelector('#boxes');

inputValueEl.addEventListener('blur', onCounterBoxesInput);
createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', destroyBoxes);