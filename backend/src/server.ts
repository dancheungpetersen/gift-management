import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import giftsRouter from './routes/gifts';
import { UserSchema } from './Schemas/UserSchema';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/gifts', giftsRouter);

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

const UserModel = mongoose.model("users",UserSchema);

// MongoDB connection
mongoose.connect(MONGOURL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/getUsers', async (req: Request, res: Response) => {
  const userData = await UserModel.find();
  res.json(userData)
});