const getImageBaseUrl = () => (process.env.IMAGE_BASE_URL || "").replace(/\/$/, "");

export const transformMarkdownUrl = uri => {
  if (uri.startsWith("/uploads/")) {
    return `${getImageBaseUrl()}${uri}`;
  }

  if (uri.startsWith("uploads/")) {
    return `${getImageBaseUrl()}/${uri}`;
  }

  return uri;
};
