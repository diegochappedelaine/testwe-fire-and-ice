export const getLastParamFromUrl = (url: string): string =>
  url.substring(url.lastIndexOf("/") + 1);
