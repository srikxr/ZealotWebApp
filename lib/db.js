import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db('Zealot');
}
