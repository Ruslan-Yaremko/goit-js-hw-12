import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

export const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
        <div class="image-info">
          <div class="info-block">
            <p class="info-label">Likes</p>
            <p class="info-value">${likes}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Views</p>
            <p class="info-value">${views}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Comments</p>
            <p class="info-value">${comments}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Downloads</p>
            <p class="info-value">${downloads}</p>
          </div>
        </div>
      </a>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
