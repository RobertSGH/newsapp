import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
let cachedDb = null;

export async function connectToDatabase() {
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
      everythingData = everythingData.map((item) => ({
        ...item,
        _id: item._id.toString(),
      }));
    } catch (error) {
      console.error('Error fetching everything data:', error);
      throw error;
    }

    try {
      headlinesData = await headlinesCollection.find().toArray();
      headlinesData = headlinesData.map((item) => ({
        ...item,
        _id: item._id.toString(),
      }));
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

export async function getPoliticsNewsFromDb() {
  try {
    const db = await connectToDatabase();
    const politicsCollection = db.collection('politics');
    let politicsData = await politicsCollection.find().toArray();
    politicsData = politicsData.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
    return { articles: politicsData };
  } catch (error) {
    console.error('Error in getPoliticsNewsFromDb:', error);
    throw error;
  }
}

export async function getBusinessNewsFromDb() {
  try {
    const db = await connectToDatabase();
    const businessCollection = db.collection('business');
    let businessData = await businessCollection.find().toArray();
    businessData = businessData.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
    return { articles: businessData };
  } catch (error) {
    console.error('Error in getBusinessNewsFromDb:', error);
    throw error;
  }
}

export async function getTechNewsFromDb() {
  try {
    const db = await connectToDatabase();
    const techCollection = db.collection('technology');
    const count = await techCollection.countDocuments();
    if (count === 0) {
      console.error('Technology collection is empty!');
      return { articles: [] };
    }

    let techData = await techCollection.find().toArray();
    techData = techData.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
    return { articles: techData };
  } catch (error) {
    console.error('Error in getTechNewsFromDb:', error);
    throw error;
  }
}

export async function getEntertainmentNewsFromDb() {
  try {
    const db = await connectToDatabase();
    const entertainmentCollection = db.collection('entertainment');
    let entertainmentData = await entertainmentCollection.find().toArray();
    entertainmentData = entertainmentData.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
    return { articles: entertainmentData };
  } catch (error) {
    console.error('Error in getEntertainmentNewsFromDb:', error);
    throw error;
  }
}
