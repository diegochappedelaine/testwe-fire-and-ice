export const getLastParamFromUrl = (url: string): string =>
  url.substring(url.lastIndexOf("/") + 1);

export const arrayToStringWithCommas = (array: string[]) =>
  array.join(", ").replace(/, ([^,]*)$/, " and $1");
