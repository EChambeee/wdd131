import  recipes  from './recipes.mjs';

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
    return recipes[getRandomNumber(recipes.length)];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <section class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div>
                <h2>${recipe.name}</h2>
                <span class="tags">${tagsTemplate(recipe.tags)}</span>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </section>
    `;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('main');
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]);
}

function filterRecipes(query) {
    return recipes.filter(recipe => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );
    }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('input[type="text"]').value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', searchHandler);
});
