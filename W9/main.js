import { getRecipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="text"]');
    
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        const recipes = getRecipes(query);
        console.log(recipes);
    });
});
