// services/emailService.ts
import nodemailer from "nodemailer";
import { IGiftRequest } from "../Schemas/GiftRequestSchema";
import { UserModel } from "../Schemas/UserSchema"; // Import User model

// Configure transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendApprovalEmail = async (
  request: IGiftRequest,
  level: number
) => {
  try {
    const role = level === 1 ? "department_head" : "cpro_department_admin";
    const approvers = await UserModel.find({ role }).lean().exec();

    /*for (const approver of approvers) {
      await transporter.sendMail({
        from: `"Gift System" <${process.env.EMAIL_FROM}>`,
        //to: approver.email,
        to: 'dan@babywise.dk',
        subject: `Approval Required (Level ${level}) - ${request.giftId}`,
        html: `
          <p>Please review gift request:</p>
          <ul>
            <li>Request ID: ${request._id}</li>
            <li>User: ${request.userId}</li>
            <li>Gift: ${request.giftId}</li>
            <li>Type: ${request.giftType}</li>
          </ul>
          <p><a href="${process.env.APP_URL}/approvals/${request._id}">Review Request</a></p>
        `,
      });
    }*/
  } catch (error) {
    console.error("Error sending approval emails:", error);
    throw new Error("Failed to send approval emails");
  }
};
