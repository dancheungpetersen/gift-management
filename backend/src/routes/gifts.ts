import { Router, Request, Response } from "express";
import { GiftRequestModel } from "../Schemas/GiftRequestSchema";
import { Types } from "mongoose";
import { sendApprovalEmail } from "../services/emailService";
import { Gift } from "../Schemas/GiftSchema";

const router = Router();

// GET /api/gifts
router.get("/", async (req: Request, res: Response) => {
  try {
    const gifts = await Gift.find();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gifts" });
  }
});

// GET /api/gift/requests
router.get("/requests", async (req: Request, res: Response) => {
  try {
    const requests = await GiftRequestModel.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gift requests" });
  }
});

// POST /api/gift/requests
router.post("/request", async (req: Request, res: Response) => {
  try {
    const { userId, giftId } = req.body;

    // Validate input
    if (!userId || !giftId) {
      res.status(400).json({ message: "Missing user ID or gift ID" });
      return;
    }

    if (!isValidObjectId(userId) || !isValidObjectId(giftId)) {
      res.status(400).json({ message: "Invalid ID format" });
      return;
    }

    // Check for existing request
    const existingRequest = await GiftRequestModel.findOne({ userId, giftId });
    if (existingRequest) {
      res.status(409).json({ message: "Gift already requested" });
      return;
    }

    // Get gift type
    const gift = await Gift.findById(giftId);
    if (!gift) {
      res.status(404).json({ message: "Gift not found" });
      return;
    }

    // Create new request with approval workflow
    const newRequest = await GiftRequestModel.create({
      userId,
      giftId,
      giftType: gift.type,
      approvals: [
        {
          level: 1,
          status: "PENDING",
        },
      ],
      currentStatus: "PENDING",
    });

    // Send initial approval emails
    await sendApprovalEmail(newRequest, 1);

    res.status(201).json(newRequest);
  } catch (error) {
    console.error("Gift request error:", error);
    res.status(500).json({ message: "Server error processing request" });
  }
});

// PATCH /api/gift/requests/:id/approve
router.patch("/requests/:id/approve", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { approverId, approvalLevel } = req.body;

    const request = await GiftRequestModel.findById(id);
    if (!request) {
      res.status(404).json({ message: "Request not found" });
      return;
    }
    /*
    // Update specific approval level
    const approvalIndex = request.approvals.findIndex(
      (a) => a.level === approvalLevel
    );
    if (approvalIndex === -1) {
      res.status(400).json({ message: "Invalid approval level" });
      return;
    }*/
    const approvalIndex = 0;
    const updateResult = await GiftRequestModel.findByIdAndUpdate(
      id,
      {
        $set: {
          [`approvals.${approvalIndex}.status`]: "APPROVED",
          [`approvals.${approvalIndex}.approverId`]: new Types.ObjectId(
            approverId
          ),
          [`approvals.${approvalIndex}.approvedAt`]: new Date(),
          currentStatus: "APPROVED"
            // request.approvals.length === approvalLevel ? "APPROVED" : "PENDING",
        },
      },
      { new: true, runValidators: true }
    );

    res.json(updateResult);
  } catch (error) {
    console.error("Approval error:", error);
    res.status(500).json({ message: "Failed to process approval" });
  }
});

function isValidObjectId(id: string): boolean {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

export default router;
