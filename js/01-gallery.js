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
    evt.preventDefault();
    const isImage = evt.target.classList.contains('gallery__image');
    if (!isImage) { 
        return;
    }

    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`, {
        onShow: () => 
            document.addEventListener('keydown', onEscKeyPress)
        ,
        onClose: () => 
            document.removeEventListener('keydown', onEscKeyPress)
        ,
    })
    instance.show();

    function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
}


