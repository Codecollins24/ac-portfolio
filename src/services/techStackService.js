import { techStackData } from "../data/techStack";

// TODO: replace with apiClient.get("/api/tech-stack/") once the Django backend is live
export async function getTechStack() {
  return Promise.resolve(techStackData);
}
