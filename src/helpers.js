import axios from 'axios';

export const getNews = async () => {
  const url = '/api/get-news';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    return null;
  }
};
