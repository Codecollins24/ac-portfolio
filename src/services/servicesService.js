import { servicesData } from "../data/services";

// TODO: replace with apiClient.get("/api/services/") once the Django backend is live
export async function getServices() {
  return Promise.resolve(servicesData);
}
