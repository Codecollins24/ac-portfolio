import { heroData, statsData } from "../data/hero";

// TODO: replace with apiClient.get("/api/hero/") once the Django backend is live
export async function getHeroContent() {
  return Promise.resolve(heroData);
}

// TODO: replace with apiClient.get("/api/stats/") once the Django backend is live
export async function getStats() {
  return Promise.resolve(statsData);
}
