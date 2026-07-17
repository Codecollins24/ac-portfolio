import { aboutData } from "../data/about";

// TODO: replace with apiClient.get("/api/about/") once the Django backend is live
export async function getAboutContent() {
  return Promise.resolve(aboutData);
}
