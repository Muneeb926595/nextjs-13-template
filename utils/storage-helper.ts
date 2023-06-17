export const StorageKeys = {
  USER_ID: "userId",
  Access_Token: "access_token",
  SELECTED_APP_LANGUAGE: "app_language",
  Cart: "cart",
};

function saveItem(key: any, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}

function removeItem(key: any) {
  localStorage.removeItem(key);
  return true;
}

function getItem(key: any) {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  } else {
    return false;
  }
}

export default {
  removeItem,
  StorageKeys,
  getItem,
  saveItem,
};
