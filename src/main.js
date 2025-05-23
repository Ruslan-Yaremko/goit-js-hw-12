import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const endMessage = document.querySelector('.end-message');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();
  if (!query) return;

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  endMessage.classList.add('hidden');

  await fetchImages();
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  await fetchImages();
});

async function fetchImages() {
  try {
    showLoader();
    const { hits, totalHits: total } = await getImagesByQuery(currentQuery, currentPage);
    totalHits = total;

    createGallery(hits);
    hideLoader();

    const totalLoaded = document.querySelectorAll('.gallery-item').length;

    if (totalLoaded < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      endMessage.classList.remove('hidden');
    }

    if (currentPage > 1) {
      scrollGallery();
    }
  } catch (error) {
    console.error(error);
  }
}

function scrollGallery() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
