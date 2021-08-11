import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Nincs ilyen recept.';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">The Pioneer Woman</p>
       
      </div>
    </a>
  </li>
      `;
  }
}
export default new ResultsView();
