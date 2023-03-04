const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const arrayEl = ingredients.map((ingredients) => {
  const listItemEl = document.createElement("li");
  
  listItemEl.classList.add("item");
  listItemEl.textContent = ingredients;
  console.log(listItemEl);
  return listItemEl;
});

console.log(arrayEl);
listEl.append(...arrayEl);




