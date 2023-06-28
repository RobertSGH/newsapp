import { getNewsFromDb } from '@/lib/mongoinit';

export default async function handler(req, res) {
  try {
    const newsData = await getNewsFromDb();
    res.status(200).json(newsData);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
