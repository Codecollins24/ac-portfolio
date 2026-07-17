import { contactData } from "../data/contact";

// TODO: replace with apiClient.get("/api/contact-info/") once the Django backend is live
export async function getContactInfo() {
  return Promise.resolve(contactData);
}

// submitContactForm(formData) is added in the Contact section phase,
// once the Formspree endpoint (or mailto fallback) is wired in.
