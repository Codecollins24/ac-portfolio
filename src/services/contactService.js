import axios from "axios";
import { contactData } from "../data/contact";

// TODO: replace with apiClient.get("/api/contact-info/") once the Django backend is live
export async function getContactInfo() {
  return Promise.resolve(contactData);
}

// Formspree endpoint is external (not the future Django API), so it uses a
// plain axios call rather than the shared apiClient. Set VITE_FORMSPREE_ENDPOINT
// in .env to enable it; otherwise the caller should fall back to a mailto link.
export async function submitContactForm(formData) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    return { ok: false, fallback: true };
  }

  try {
    await axios.post(endpoint, formData, {
      headers: { Accept: "application/json" },
    });
    return { ok: true, fallback: false };
  } catch {
    return { ok: false, fallback: false };
  }
}
