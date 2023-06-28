import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db('newsapp');
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Could not connect to database:', error);
    throw error;
  }
}

export async function getNewsFromDb() {
  try {
    const db = await connectToDatabase();

    const everythingCollection = db.collection('everything');
    const headlinesCollection = db.collection('headlines');

    let everythingData;
    let headlinesData;

    try {
      everythingData = await everythingCollection.find().toArray();
    } catch (error) {
      console.error('Error fetching everything data:', error);
      throw error;
    }

    try {
      headlinesData = await headlinesCollection.find().toArray();
    } catch (error) {
      console.error('Error fetching headlines data:', error);
      throw error;
    }

    return { articles: [...everythingData, ...headlinesData] };
  } catch (error) {
    console.error('Error in getNewsFromDb:', error);
    throw error;
  }
}
