import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const container = document.querySelector('.gallery');
export function createGallery(images) {
  function itemInsert({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="image-describe">
        <div class="img-info">
          <b>Likes</b>
          <p>${likes}</p>
        </div>
        <div class="img-info">
          <b>Views</b>
          <p>${views}</p>
        </div>
        <div class="img-info">
          <b>Comments</b>
          <p>${comments}</p>
        </div>
        <div class="img-info">
          <b>Downloads</b>
          <p>${downloads}</p>
        </div>
        </div>
      </li>
    `;
  }
  const newGallery = images.map(itemInsert).join('');
  container.insertAdjacentHTML('beforeend', newGallery);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
  lightbox.refresh();
};

export function clearGallery(){
    container.innerHTML="";
};
 export function showLoader(){
    const loader= document.querySelector(".loader");
    loader.classList.remove("visuallyhidden");
 };
  export function hideLoader(){
    const loader= document.querySelector(".loader");
    loader.classList.add("visuallyhidden");
 };

console.log("mygallery", container);