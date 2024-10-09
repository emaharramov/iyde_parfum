export const getFromLocale = (key) => {
  const item = key ? localStorage.getItem(key) : "";
  return item;
};
