import { getTechNewsFromDb } from '@/lib/mongoinit';

export default async function handler(req, res) {
  try {
    const TechNewsData = await getTechNewsFromDb();
    res.status(200).json(TechNewsData);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
