"use strict"
const categoriesList = document.querySelector('#categories');
const numberOfCategories = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", numberOfCategories.length);
for (const element of numberOfCategories) {
     const categoryTitle = element.querySelectorAll("ul");
    console.log("Category:", element.firstElementChild.textContent);
    for (const elements of categoryTitle) {

        console.log("Elements:", elements.children.length);
    }
}