import { projectsData } from "../data/projects";

// TODO: replace with apiClient.get("/api/projects/") once the Django backend is live
export async function getProjects() {
  return Promise.resolve(projectsData);
}
