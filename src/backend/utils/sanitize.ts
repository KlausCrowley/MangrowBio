export function sanitizeText(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").trim();
}

export function sanitizeOptionalText(input: unknown): string | null {
  const text = sanitizeText(input);
  return text.length > 0 ? text : null;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
