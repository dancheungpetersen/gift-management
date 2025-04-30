// services/emailService.ts
import nodemailer from "nodemailer";
import { IGiftRequest } from "../Schemas/GiftRequestSchema";
import { UserModel } from "../Schemas/UserSchema"; // Import User model

// Configure transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendApprovalEmail = async (
  request: IGiftRequest
) => {
  try {
    const role = request.giftType === "vip" ? "cpro_department_admin" : "department_head";
    const approvers = await UserModel.find({ role }).lean().exec();

    for (const approver of approvers) {
      const payload = {
        from: `"Gift System" <${process.env.EMAIL_FROM}>`,
        to: approver.email,
        //to: "dan@babywise.dk",
        subject: `Approval Required (Level ${request.giftType}) - ${request.giftId}`,
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
      };
      console.log(`Sending email to ${approver.email}`, payload);
      //await transporter.sendMail(payload);
    }
  } catch (error) {
    console.error("Error sending approval emails:", error);
    throw new Error("Failed to send approval emails");
  }
};
