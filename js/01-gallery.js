import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
}

function onGalleryContainerClick(evt) {
    const isImage = evt.target.classList.contains('gallery__image');
    if (!isImage) { 
        return;
    }

    console.log(evt.target.dataset.source);
}