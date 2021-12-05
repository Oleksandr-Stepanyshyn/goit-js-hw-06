const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function createMarkup(el) {
  const element = document.createElement('li');
  element.classList.add("item");
  element.textContent = el;
  return element;
};

const markupArr = ingredients.map(createMarkup);

const list = document.querySelector("#ingredients");
list.append(...markupArr);





