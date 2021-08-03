import * as model from './model.js';
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');
// A timeout még nincs használva.
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
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
    alert(err);
  }
};
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
