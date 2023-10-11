import { connectToDatabase } from '@/lib/mongoinit';

export default async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { articleId } = req.body;

    if (!articleId) {
      return res.status(400).json({ error: 'Article ID is required' });
    }

    if (!db) {
      return res.status(500).json({ error: 'DB connection failed' });
    }

    await db.collection('articleClicks').insertOne({
      articleId,
      clickedAt: new Date(),
    });

    res.status(200).json({ message: 'Click updated successfully' });
  } catch (error) {
    console.error('Error in updateClick API: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
