//All element

const AllCategoriesEl = categories.querySelectorAll(".item");
console.log('Number of categories:', AllCategoriesEl.length);


//First element

const animalsEl = categories.firstElementChild;
console.log("Category:", animalsEl.firstElementChild.textContent);

const animalsLastEl = animalsEl.lastElementChild;
console.log("Elements:", animalsLastEl.children.length);

//Second element

const productsEl = categories.firstElementChild.nextElementSibling;
console.log("Category:", productsEl.firstElementChild.textContent);

const productsLastEl = productsEl.lastElementChild;
console.log("Elements:", productsLastEl.children.length);

//Last element

const technologiesEl = categories.lastElementChild;
console.log("Category:", technologiesEl.firstElementChild.textContent);

const technologiesLastEl = technologiesEl.lastElementChild;
console.log("Elements:", technologiesLastEl.children.length);

