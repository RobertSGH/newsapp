import { getEntertainmentNewsFromDb } from '@/lib/mongoinit';

export default async function handler(req, res) {
  try {
    const EntertainmentNewsData = await getEntertainmentNewsFromDb();
    res.status(200).json(EntertainmentNewsData);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
