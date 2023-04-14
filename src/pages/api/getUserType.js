// pages/api/get_user_type.js
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = "mongodb://localhost:27017/Zealot";

  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

  try {
    const collection = client.db().collection("users");
    console.log("SUCCESS")

    const user = await collection.findOne({ _id: req.query.id });
    const user_type = user.user_type;

    res.status(200).json({ user_type });
  } catch (err) {
    console.error("Error in /api/getUserType:", err);
    res.status(500).json({ message: `Internal server error: ${err.message}` });
  }
   finally {
    console.group("DONEE")
    await client.close();
  }
}
