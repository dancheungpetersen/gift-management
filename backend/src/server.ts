import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import giftsRouter from "./routes/gifts";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/gifts", giftsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

// MongoDB connection
mongoose
  .connect(MONGOURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

