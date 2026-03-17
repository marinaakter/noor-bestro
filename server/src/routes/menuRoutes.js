import express from "express";

import { getFeaturedMenuItems, getMenuItemBySlug, getMenuItems } from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getMenuItems);
router.get("/featured", getFeaturedMenuItems);
router.get("/:slug", getMenuItemBySlug);

export default router;
