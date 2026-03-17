import MenuItem from "../models/MenuItem.js";
import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getMenuItems = asyncHandler(async (req, res) => {
  const { category } = req.query;
  const filter = { available: true };

  if (category) {
    filter.category = category.toLowerCase();
  }

  const menuItems = await MenuItem.find(filter).sort({ category: 1, name: 1 });

  res.status(200).json({
    success: true,
    count: menuItems.length,
    data: menuItems,
  });
});

export const getFeaturedMenuItems = asyncHandler(async (_req, res) => {
  const featuredItems = await MenuItem.find({
    available: true,
    isFeatured: true,
  }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: featuredItems.length,
    data: featuredItems,
  });
});

export const getMenuItemBySlug = asyncHandler(async (req, res, next) => {
  const menuItem = await MenuItem.findOne({
    slug: req.params.slug,
    available: true,
  });

  if (!menuItem) {
    return next(new AppError("Menu item not found.", 404));
  }

  res.status(200).json({
    success: true,
    data: menuItem,
  });
});
