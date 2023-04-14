// import { connectToDatabase } from "../../utils/mongodb";

// export default async (req, res) => {
//   const { email, password, userType, first_name, last_name } = req.body;

//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   if (!email || !password || !userType) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const { db } = await connectToDatabase();
//     const existingUser = await db.collection("Users").findOne({ Email });

//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = {
//       Email: email,
//       password: hashedPassword,
//       user_type: userType,
//       first_name: first_name,
//       last_name: last_name,
//     };

//     await db.collection("Users").insertOne(newUser);

//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
