const allCategoriesEl = document.querySelectorAll(".item");
console.log('Number of categories:', allCategoriesEl.length);

// console.log(arrCategories);
// const listCategoriesEl = document.querySelectorAll(".item");
// console.log(listCategoriesEl);
// const titleCategory = listCategoriesEl[0].firstElementChild.textContent;
// console.log('Category:', titleCategory);
// const itemsCategotyEl = listCategoriesEl[0].querySelectorAll('.item ul li');
// console.log('Elements:', itemsCategotyEl.length);

function categories (el) {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.querySelectorAll('.item ul li').length);
 };
allCategoriesEl.forEach(categories);
