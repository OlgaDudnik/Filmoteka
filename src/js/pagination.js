import FetchMovie from './api.fetch';
import { refs } from './refs';
import articlesTpl from '../templates/card.hbs';

const FetchMovieInstance = new FetchMovie();

refs.pagination.addEventListener('click', onPaginationClick);

let page = 1;
let totalPages = 1000;

async function onPaginationClick(e) {
  let target = e.target;
  if (!['SPAN', 'svg', 'path'].includes(target.nodeName)) {
    return;
  }

  if (['svg', 'path'].includes(target.nodeName)) {
    target = target.closest('span');
  }

  if (target.classList.contains('disabled-arrow')) {
    return;
  }

  if (target.dataset.action === 'left') {
    scroll();
    FetchMovieInstance.pageNum -= 1;
    const films = await FetchMovieInstance.fetchPopularFilms();
    appendArticlesMarkup(films.results);
    FetchMovieInstance.generatePaginationMarkup(page, totalPages);
  } else if (target.dataset.action === 'right') {
    scroll();
    FetchMovieInstance.pageNum += 1;
    const films = await FetchMovieInstance.fetchPopularFilms();
    appendArticlesMarkup(films.results);
    FetchMovieInstance.generatePaginationMarkup(page, totalPages);
  } else if (target.dataset.action === 'change') {
    scroll();
    FetchMovieInstance.pageNum = +target.dataset.page;
    const films = await FetchMovieInstance.fetchPopularFilms();
    appendArticlesMarkup(films.results);
    FetchMovieInstance.generatePaginationMarkup(
      +target.dataset.page,
      totalPages
    );
  }
}

function scroll() {
  window.scrollTo(pageYOffset, 0);
}

function appendArticlesMarkup(results) {
  refs.collection.innerHTML = articlesTpl(results);
}
