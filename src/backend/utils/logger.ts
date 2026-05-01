type Meta = Record<string, unknown>;

function formatMeta(meta?: Meta): string {
  if (!meta) return "";
  return ` ${JSON.stringify(meta)}`;
}

export const logger = {
  info(message: string, meta?: Meta) {
    console.log(`[INFO] ${new Date().toISOString()} ${message}${formatMeta(meta)}`);
  },
  warn(message: string, meta?: Meta) {
    console.warn(`[WARN] ${new Date().toISOString()} ${message}${formatMeta(meta)}`);
  },
  error(message: string, meta?: Meta) {
    console.error(`[ERROR] ${new Date().toISOString()} ${message}${formatMeta(meta)}`);
  },
};
