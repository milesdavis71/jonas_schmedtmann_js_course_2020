import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1. A recept betöltése
    await model.loadRecipe(id);

    // A recept megjelenítése
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render search results
    console.log(model.state.search.results);
    searchView.clearInput();
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
