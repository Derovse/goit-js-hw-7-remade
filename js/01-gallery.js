import { galleryItems } from './gallery-items.js';

const ulEl = document.querySelector('.gallery');
ulEl.addEventListener('click', onClickImg);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

function onClickImg(ev) {
  ev.preventDefault();
  const targetEl = ev.target;
  if (
    targetEl.tagName !== 'IMG' ||
    !targetEl.classList.contains('gallery__image')
  ) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${targetEl.dataset.source}" width="800" height="600">
  `);
  instance.show();

  const handleKeyDown = ev => {
    if (ev.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', handleKeyDown);
    }
  };

  const closeModal = () => {
    instance.close();
    document.removeEventListener('keydown', handleKeyDown);
  };

  instance.element().addEventListener('click', closeModal);
  document.addEventListener('keydown', handleKeyDown);
}

ulEl.innerHTML = createGallery(galleryItems);
