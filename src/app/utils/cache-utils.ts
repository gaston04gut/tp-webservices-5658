export const setCache = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem(key + '_time', new Date().getTime().toString());
};

export const getCache = (key: string, expirationMs: number): any | null => {
  const cachedData = localStorage.getItem(key);
  const cachedTime = localStorage.getItem(key + '_time');

  if (cachedData && cachedTime) {
    const now = new Date().getTime();
    if (now - parseInt(cachedTime) < expirationMs) {
      return JSON.parse(cachedData);
    } else {
      removeCache(key);
    }
  }
  return null;
};

export const removeCache = (key: string) => {
    localStorage.removeItem(key);
    localStorage.removeItem(key + '_time');
}
