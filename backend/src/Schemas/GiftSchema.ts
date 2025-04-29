// Schemas/GiftSchema.ts
import { Schema, model } from "mongoose";

const GiftSchema = new Schema({
  name: { type: String, required: true },
  type: { 
    type: String, 
    enum: ["normal", "vip"], 
    default: "normal",
    required: true 
  },
  // ... other fields
});

export const Gift = model("Gift", GiftSchema);
