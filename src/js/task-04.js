let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
// console.log(decrementEl);
const incrementtEl = document.querySelector('button[data-action="increment"]');
// console.log(incrementtEl);
const valueEl = document.querySelector("#value");
// console.log(valueEl);

function decrementCount() {
    counterValue -= 1;
    // console.log(counterValue);
    valueEl.textContent = counterValue;
};
 
function incrementCount() {
    counterValue += 1;
    // console.log(counterValue);
    valueEl.textContent = counterValue;
 };

decrementEl.addEventListener("click", decrementCount);
incrementtEl.addEventListener("click", incrementCount);