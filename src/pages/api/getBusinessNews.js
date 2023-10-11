import { getBusinessNewsFromDb } from '@/lib/mongoinit';

export default async function handler(req, res) {
  try {
    const BusinessNewsData = await getBusinessNewsFromDb();
    res.status(200).json(BusinessNewsData);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
