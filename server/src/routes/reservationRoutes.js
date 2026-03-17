import express from "express";

import { createReservation, getReservations } from "../controllers/reservationController.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createReservationValidation } from "../validators/reservationValidators.js";

const router = express.Router();

router.route("/").get(getReservations).post(createReservationValidation, validateRequest, createReservation);

export default router;
