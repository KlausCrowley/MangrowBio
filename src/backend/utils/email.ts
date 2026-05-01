import nodemailer from "nodemailer";
import { logger } from "@/backend/utils/logger";
import type { ContactInput } from "@/backend/utils/validation";

function canSendEmail() {
  return (
    !!process.env.SMTP_HOST &&
    !!process.env.SMTP_PORT &&
    !!process.env.SMTP_USER &&
    !!process.env.SMTP_PASS &&
    !!process.env.CONTACT_NOTIFICATION_TO
  );
}

export async function sendLeadNotification(contact: ContactInput) {
  if (!canSendEmail()) {
    logger.info("SMTP config missing, skipping lead email", { email: contact.email });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_NOTIFICATION_TO,
    subject: `New Mangrow Bio enquiry from ${contact.name}`,
    text: `Name: ${contact.name}
Company: ${contact.company || "N/A"}
Email: ${contact.email}
Service: ${contact.service_required || "N/A"}

Message:
${contact.message}`,
  });
}
