import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    //   1. oldal, és vannak további oldalak
    //   1. oldal, és nincs  több oldal
    //   Utolsó oldal
    //   Egyéb oldal
  }
}
export default new PaginationView();
