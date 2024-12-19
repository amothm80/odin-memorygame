import { createClient } from 'pexels';
export default function fetchImages(setPhotos) {
  const client = createClient(process.env.API_KEY);
  const query = 'persons';
  const orientation = 'square';
  const size = 'small';

  client.photos
    .search({ query, orientation, size, per_page: 80 })
    .then((response) => showPhotos(response));

  function showPhotos(response) {
    let locImages = [];
    response.photos.forEach((el) => {
      locImages.push(el.src.tiny);
    });
    setPhotos(locImages);
    // console.log(locImages);
    // setImages(locImages);
  }
}
