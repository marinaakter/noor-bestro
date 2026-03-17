import { body } from "express-validator";

export const createReservationValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required."),
  body("phone")
    .customSanitizer((value) => (typeof value === "string" ? value.replace(/[\s-]/g, "") : value))
    .trim()
    .notEmpty()
    .withMessage("Phone is required.")
    .isLength({ min: 11, max: 15 })
    .withMessage("Phone number must be between 11 and 15 characters."),
  body("email").optional({ checkFalsy: true }).isEmail().withMessage("Enter a valid email address."),
  body("date").trim().notEmpty().withMessage("Date is required."),
  body("time").trim().notEmpty().withMessage("Time is required."),
  body("guests")
    .notEmpty()
    .withMessage("Guest count is required.")
    .isInt({ min: 1, max: 30 })
    .withMessage("Guests must be between 1 and 30."),
  body("specialRequest")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 500 })
    .withMessage("Special request must be at most 500 characters."),
];
