import apiClient from "./client";
import { endpoints } from "./endpoints";

export async function createReservation(payload) {
  const response = await apiClient.post(endpoints.reservations, payload);
  return response.data;
}
