import icons from 'url:../../img/icons.svg'; //parcel 2.0
import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _successMessage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', function () {
      handler();
    });
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
