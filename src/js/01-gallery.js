import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
function renderGalleryItems() {
  let galleryHTML = '';
  for (let i = 0; i < galleryItems.length; i++) {
    const { preview, original, description } = galleryItems[i];
    galleryHTML += `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>

        `;
  }
  gallery.innerHTML = galleryHTML;
}

renderGalleryItems();

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
