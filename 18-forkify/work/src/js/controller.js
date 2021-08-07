import * as model from './model.js';
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////

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
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
