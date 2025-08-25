export function getStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

export function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error('Error writing to localStorage:', error);
    return false;
  }
}

export function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
}
