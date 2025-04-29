import { Router, Request, Response } from "express";
import { UserModel } from "../Schemas/UserSchema";

const router = Router();

// GET /api/users

router.get("/", async (req: Request, res: Response) => {
  try {
    const userData = await UserModel.find();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
