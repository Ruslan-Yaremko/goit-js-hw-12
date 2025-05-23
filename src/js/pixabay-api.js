
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50362686-a19d598e286bdc8c634e59341';

export async function fetchImages(query, page = 1, perPage = 40) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });

    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    console.error('Помилка під час завантаження зображень:', error);
    throw error;
  }
}
