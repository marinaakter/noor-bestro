import { body } from "express-validator";

export const createContactValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required."),
  body("phone")
    .customSanitizer((value) => (typeof value === "string" ? value.replace(/[\s-]/g, "") : value))
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 11, max: 15 })
    .withMessage("Phone number must be between 11 and 15 characters."),
  body("email").trim().notEmpty().withMessage("Email is required.").isEmail().withMessage("Enter a valid email address."),
  body("subject").trim().notEmpty().withMessage("Subject is required."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Message must be between 10 and 2000 characters."),
];
