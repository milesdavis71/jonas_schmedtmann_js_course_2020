import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupButtonNext() {
    const currPage = this._data.page;
    return `
    <button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </button>
    `;
  }
  _generateMarkupButtonPrev() {
    const currPage = this._data.page;
    return `
    <button data-goto="${
      currPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>
  `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    //   Page 1st and others
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupButtonNext();
    }

    //   Last page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupButtonPrev();
    }

    //   Other page
    if (currPage != 1 && currPage < numPages) {
      return [
        this._generateMarkupButtonPrev(),
        this._generateMarkupButtonNext(),
      ];
    }

    //   Page 1st and no others
    return '';
  }
}
export default new PaginationView();
