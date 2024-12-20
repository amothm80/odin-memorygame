import { createClient } from 'pexels';
export default async function fetchImages() {
  const client = createClient(import.meta.env.VITE_API_KEY);
  const query = 'cars';
  const orientation = 'square';
  const size = 'small';

  const response = await client.photos.search({ query, orientation, size, per_page: 80 });
  return response.photos.map((el) => el.src.tiny);
  // return response.photos.map((el) => el.src.tiny);

  // client.photos
  //   .search({ query, orientation, size, per_page: 80 })
  //   .then((response) => showPhotos(response));

  // function showPhotos(response) {
  //   let locImages = [];
  //   response.photos.forEach((el) => {
  //     locImages.push(el.src.tiny);
  //   });
  //   // console.log(locImages);
  //   setPhotos(locImages);
    
  //   // setImages(locImages);
  // }
}
