import Reservation from "../models/Reservation.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.create(req.body);

  res.status(201).json({
    success: true,
    message: "Reservation created successfully.",
    data: reservation,
  });
});

export const getReservations = asyncHandler(async (_req, res) => {
  const reservations = await Reservation.find().sort({ createdAt: -1, fullName: 1 });

  res.status(200).json({
    success: true,
    count: reservations.length,
    data: reservations,
  });
});
