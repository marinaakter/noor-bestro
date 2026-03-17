import apiClient from "./client";
import { endpoints } from "./endpoints";

export async function createContactMessage(payload) {
  const response = await apiClient.post(endpoints.contact, payload);
  return response.data;
}
