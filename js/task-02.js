const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

for (const ingred of ingredients) {
const ingredList = document.createElement("li");
  ingredList.textContent = ingred;
  ingredList.className = "item";
  list.append(ingredList);
}

