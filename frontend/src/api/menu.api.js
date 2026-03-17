import apiClient from "./client";
import { endpoints } from "./endpoints";

export async function getMenu(category = "all") {
  const params = category !== "all" ? { category } : {};
  const response = await apiClient.get(endpoints.menu, { params });
  return response.data;
}

export async function getFeaturedMenu() {
  const response = await apiClient.get(endpoints.featuredMenu);
  return response.data;
}
