const API_KEY = '50362686-a19d598e286bdc8c634e59341';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1, perPage = 15) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  return await response.json();
}
