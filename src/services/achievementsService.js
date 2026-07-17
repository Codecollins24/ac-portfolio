import { achievementsData } from "../data/achievements";

// TODO: replace with apiClient.get("/api/achievements/") once the Django backend is live
export async function getAchievements() {
  return Promise.resolve(achievementsData);
}
