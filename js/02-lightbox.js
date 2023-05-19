import { galleryItems } from './gallery-items.js';
// Change code below this line
const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const ulEl = document.querySelector('.gallery');

const galleryEl = gallery(galleryItems);
ulEl.insertAdjacentHTML('beforeend', galleryEl);

function gallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href='${original}'>
        <img class="gallery__image" src ='${preview}'
        alt='${description}''/></a></li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);
