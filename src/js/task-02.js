const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = [];

function createMarkup (el) {
  const item = document.createElement('li');
  item.textContent = el;
  // console.log(item.textContent);
  item.classList.add("item")
  // console.log(item);
  markup.push(item);
  return item;
};

ingredients.forEach(createMarkup);
 
console.log(markup);

const list = document.querySelector('#ingredients')
// console.log(list);
list.append(markup.join(''));





