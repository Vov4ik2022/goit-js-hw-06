const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const listEl = document.querySelector('.ingredients');

ingredients.forEach((ingredients) => {
  const listItemEl = document.createElement("li");
 
  listItemEl.textContent = ingredients;
  listItemEl.classList.add("item");
  console.log(listItemEl);
});

const array = ingredients.map((el) => ingredients(el));
// return el.listItemEl;
console.log(array)


// const arrayEl = ingredients.map((ingredient) => ingredient.listItemEl);
// console.log(arrayEl);

// listEl.append(listItemEl);







// const listEl = document.querySelector(".ingredients");
// const listItemEl = document.createElement('li');
// listItemEl.classList.add("item");
// listItemEl.textContent = "Potatoes";
// console.log(listItemEl);

