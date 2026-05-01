import { ApiError } from "@/backend/utils/errors";
import { sanitizeOptionalText, sanitizeText, slugify } from "@/backend/utils/sanitize";

export type ContactInput = {
  name: string;
  company: string | null;
  email: string;
  service_required: string | null;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInput(raw: Record<string, unknown>): ContactInput {
  const name = sanitizeText(raw.name);
  const email = sanitizeText(raw.email).toLowerCase();
  const message = sanitizeText(raw.message);
  const company = sanitizeOptionalText(raw.company);
  const service_required = sanitizeOptionalText(raw.service_required);

  if (!name || !email || !message) {
    throw new ApiError(400, "Name, email, and message are required.");
  }
  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Please enter a valid email address.");
  }

  return { name, company, email, service_required, message };
}

export function validateContactStatus(rawStatus: unknown) {
  const status = sanitizeText(rawStatus);
  if (!["pending", "contacted"].includes(status)) {
    throw new ApiError(400, "Status must be pending or contacted.");
  }
  return status;
}

export function validateCaseInput(raw: Record<string, unknown>) {
  const payload = {
    title: sanitizeText(raw.title),
    industry: sanitizeText(raw.industry),
    challenge: sanitizeText(raw.challenge),
    solution: sanitizeText(raw.solution),
    results: sanitizeText(raw.results),
    metrics: sanitizeText(raw.metrics),
  };

  if (Object.values(payload).some((value) => !value)) {
    throw new ApiError(400, "All case study fields are required.");
  }

  return payload;
}

export function validateBlogInput(raw: Record<string, unknown>) {
  const title = sanitizeText(raw.title);
  const category = sanitizeText(raw.category);
  const author = sanitizeText(raw.author);
  const content = typeof raw.content === "string" ? raw.content.trim() : "";
  const featured_image = sanitizeOptionalText(raw.featured_image);
  const slugSource = sanitizeText(raw.slug) || title;
  const slug = slugify(slugSource);

  if (!title || !category || !author || !content || !slug) {
    throw new ApiError(400, "Title, slug, category, author, and content are required.");
  }

  return { title, slug, category, author, content, featured_image };
}
