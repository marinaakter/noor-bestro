import express from "express";

import menuRoutes from "./menuRoutes.js";
import reservationRoutes from "./reservationRoutes.js";
import contactRoutes from "./contactRoutes.js";

const router = express.Router();

router.use("/menu", menuRoutes);
router.use("/reservations", reservationRoutes);
router.use("/contact", contactRoutes);

export default router;
