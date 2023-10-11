import { MongoClient } from 'mongodb';
import axios from 'axios';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(process.env.FIREBASE_ADMIN_SDK_PATH),
  });
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const headlinesApiUrl = `${baseUrl}/top-headlines`;

export default async function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent as a Bearer token
  if (!token) {
    return res.status(401).send('Authorization token must be provided');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (decodedToken.uid !== 'Vqf1xTrzXCWuxvFvo6qFP4Wz1im1') {
      return res.status(403).send('Unauthorized access');
    }
  } catch (error) {
    return res.status(401).send('Invalid token');
  }

  if (req.method !== 'POST') {
    // Handle non-POST requests
    res.status(405).json({ error: 'Invalid request method' });
    return;
  }

  const { country, category, pageSize, collectionName } = req.body;

  // Create params object for API call
  const params = {
    country,
    category,
    pageSize,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  };

  // MongoDB configuration
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

  try {
    // Fetch news data
    const newsResponse = await axios.get(headlinesApiUrl, { params });
    const newsData = newsResponse.data;

    // Connect to MongoDB
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const collection = client.db('newsapp').collection(collectionName);

    // Insert news data into MongoDB
    // await collection.deleteMany({});
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
