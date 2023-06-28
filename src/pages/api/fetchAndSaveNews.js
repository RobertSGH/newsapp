import { MongoClient } from 'mongodb';
import axios from 'axios';

// URL and parameters for NewsAPI
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const newsApiUrl = `${baseUrl}/top-headlines`;
const newsApiParams = {
  language: 'en',
  category: 'general',
  page: 2,
  pageSize: 10,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
};

// MongoDB configuration
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const collectionName = 'headlines'; // replace with 'everything' for the other collection

export default async function handler(req, res) {
  // Only allow this route to be triggered in a dev environment
  if (process.env.NODE_ENV !== 'development') {
    res.status(403).json({ error: 'This route is not allowed in production.' });
    return;
  }

  try {
    // Fetch news data
    const newsResponse = await axios.get(newsApiUrl, { params: newsApiParams });
    const newsData = newsResponse.data;

    // Connect to MongoDB
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const collection = client.db('newsapp').collection(collectionName);

    // Insert news data into MongoDB
    await collection.deleteMany({});
    await collection.insertMany(newsData.articles);

    await client.close();

    res
      .status(200)
      .json({ message: 'News data fetched and saved to MongoDB.' });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: error.message });
  }
}
