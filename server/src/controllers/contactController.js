import ContactMessage from "../models/ContactMessage.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createContactMessage = asyncHandler(async (req, res) => {
  const contactMessage = await ContactMessage.create(req.body);

  res.status(201).json({
    success: true,
    message: "Contact message submitted successfully.",
    data: contactMessage,
  });
});

export const getContactMessages = asyncHandler(async (_req, res) => {
  const contactMessages = await ContactMessage.find().sort({ createdAt: -1, fullName: 1 });

  res.status(200).json({
    success: true,
    count: contactMessages.length,
    data: contactMessages,
  });
});
