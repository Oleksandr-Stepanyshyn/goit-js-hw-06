const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function createMarkup(el) {
  const item = document.createElement('li');
  item.classList.add("item");
  item.textContent = el;
  return item;
};

const markupArr = ingredients.map(createMarkup);

const list = document.querySelector("#ingredients");
list.append(...markupArr);





