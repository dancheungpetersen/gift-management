// Schemas/GiftRequestSchema.ts
import { Document, Schema, model, Types } from "mongoose";

export interface IApproval {
  level: number;
  approverId?: Types.ObjectId | null;
  approvedAt?: Date;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

export interface IGiftRequest extends Document {
  userId: Types.ObjectId;
  giftId: Types.ObjectId;
  giftType: "normal" | "vip";
  requestedAt: Date;
  approvals: IApproval[];
  currentStatus: "PENDING" | "APPROVED" | "REJECTED";
}

const GiftRequestSchema = new Schema<IGiftRequest>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  giftId: { type: Schema.Types.ObjectId, ref: "Gift", required: true },
  giftType: { type: String, enum: ["normal", "vip"], required: true },
  requestedAt: { type: Date, default: Date.now },
  approvals: [{
    level: { type: Number, required: true },
    approverId: { type: Schema.Types.ObjectId, ref: "User" },
    approvedAt: Date,
    status: { type: String, enum: ["PENDING", "APPROVED", "REJECTED"] }
  }],
  currentStatus: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  }
});

export const GiftRequestModel = model("GiftRequest", GiftRequestSchema);