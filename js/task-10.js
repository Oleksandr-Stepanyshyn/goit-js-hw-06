function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValueEl = document.querySelector('#controls input');
const createBtnEl = inputValueEl.nextElementSibling;
const destroyBtnEl = createBtnEl.nextElementSibling;
const boxesEl = document.querySelector('#boxes');

inputValueEl.addEventListener('blur', onCounterBoxesInput);
createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', destroyBoxes);

// ================= Solution 1 =============== //

function createBoxes(amount) {
  const arrItems = [];

  for (let i = 1; i <= amount; i += 1) {
    const sizeBox = 20 + 10 * i;
    const backgroundColor = getRandomHexColor();
    const item = `<div style="background-color: ${backgroundColor}; width: ${sizeBox}px; height: ${sizeBox}px;"></div>`;
    arrItems.push(item);
  }
  
  boxesEl.innerHTML = arrItems.join("");
};

let count;

function onCounterBoxesInput(event) {
  count = event.currentTarget.value;
  return count;
};

function onCreateBtnClick(event) {
  createBoxes(count);
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
};


// ================= Solution 2 =============== //

// let count;

// function createBoxes(amount) {
//   const arrItems = [];

//   for (let i = 1; i <= amount; i += 1) {
//     const item = document.createElement('div');
//     const sizeBox = 20 + 10 * i;
//     item.style.width = `${sizeBox}px`;
//     item.style.height = `${sizeBox}px`;
//     item.style.backgroundColor = getRandomHexColor();
//     arrItems.push(item);
//   }

//   boxesEl.append(...arrItems);
// };

// function onCounterBoxesInput(event) {
//   count = event.currentTarget.value;
//   console.log(count);
//   return count;
// };

// function onCreateBtnClick(event) {
//   createBoxes(count);
// };

// function destroyBoxes() {
//   boxesEl.innerHTML = "";
// };


