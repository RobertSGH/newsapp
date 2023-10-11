import { getPoliticsNewsFromDb } from '@/lib/mongoinit';

export default async function handler(req, res) {
  try {
    const PoliticsNewsData = await getPoliticsNewsFromDb();
    res.status(200).json(PoliticsNewsData);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
