import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../Schemas/UserSchema"; // adjust path as needed

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 1. Find user by email
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  
  // 2. Check password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  // 3. Create JWT token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET || "jwt_secret",
    { expiresIn: "2h" }
  );

  // 4. Return user info (excluding password) and token
  const { password: _, ...userData } = user.toObject();
  res.json({ user: userData, token });
});

export default router;
