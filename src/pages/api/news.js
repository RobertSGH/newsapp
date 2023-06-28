import axios from 'axios';

export default async function handler(req, res) {
  const { endpoint, ...params } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let url = baseUrl;

  switch (endpoint) {
    case 'headlines':
      url += 'top-headlines';
      break;
    case 'everything':
      url += 'everything';
      break;
    case 'sources':
      url += 'sources';
      break;
    default:
      res.status(400).json({ message: 'Invalid endpoint' });
      return;
  }

  try {
    const response = await axios.get(url, {
      params: {
        ...params,
        apiKey: apiKey,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
