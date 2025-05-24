import { fetchImages } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentPage = 1;
let currentQuery = '';
const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.searchQuery.value.trim();
  if (!query) {
    iziToast.info({
      title: 'Увага',
      message: 'Будь ласка, введіть пошуковий запит.',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await fetchImages(currentQuery, currentPage);
    hideLoader();

    if (hits.length === 0) {
      iziToast.warning({
        title: 'Увага',
        message: 'За вашим запитом не знайдено жодного зображення.',
        position: 'topRight',
      });
      return;
    }

    createGallery(hits);
    if (totalHits > currentPage * 40) {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз.',
      position: 'topRight',
    });
    console.error(error);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const { hits, totalHits } = await fetchImages(currentQuery, currentPage);
    hideLoader();
    createGallery(hits);

    const maxPage = Math.ceil(totalHits / 40);
    if (currentPage < maxPage) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        title: 'Інформація',
        message: 'Це всі результати пошуку.',
        position: 'topRight',
      });
    }

    // Прокрутка до нових зображень
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    hideLoader();
    console.error(error);
  }
});
