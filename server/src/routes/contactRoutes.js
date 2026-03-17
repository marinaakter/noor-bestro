import express from "express";

import { createContactMessage, getContactMessages } from "../controllers/contactController.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createContactValidation } from "../validators/contactValidators.js";

const router = express.Router();

router.route("/").get(getContactMessages).post(createContactValidation, validateRequest, createContactMessage);

export default router;
