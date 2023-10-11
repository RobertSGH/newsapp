import axios from 'axios';
import Cookies from 'js-cookie';

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

export const getPoliticsNews = async () => {
  const url = '/api/getPoliticsNews';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    return null;
  }
};

export const getBusinessNews = async () => {
  const url = '/api/getBusinessNews';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    return null;
  }
};

export const getTechNews = async () => {
  const url = '/api/getTechNews';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    return null;
  }
};

export const getEntertainmentNews = async () => {
  const url = '/api/getEntertainmentNews';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    return null;
  }
};

export const savePreferencesToCookies = (preferences) => {
  Cookies.set('userPreferences', JSON.stringify(preferences));
};
