import { connectToDatabase } from '@/lib/mongoinit';

export default async (req, res) => {
  const db = await connectToDatabase();

  const topClickedArticles = await db
    .collection('articleClicks')
    .aggregate([
      { $group: { _id: '$articleId', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ])
    .toArray();

  res.status(200).json({ articles: topClickedArticles });
};
