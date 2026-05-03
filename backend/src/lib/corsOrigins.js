/**
 * Allowed browser origins for CORS and Socket.io.
 * Production: set CLIENT_URL to your public site URL (comma-separated for several origins).
 */
export function allowedOrigins() {
  const devOrigin = "http://localhost:5173";
  if (process.env.NODE_ENV !== "production") {
    return [devOrigin];
  }

  const fromClient = process.env.CLIENT_URL?.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (fromClient?.length) return fromClient;

  console.warn(
    "[cors] Production: set CLIENT_URL to your public URL (e.g. https://example.com) or CORS will fail."
  );
  return [devOrigin];
}
