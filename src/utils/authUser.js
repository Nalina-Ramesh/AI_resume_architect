export const readStoredUser = () => {
  try {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const clearStoredAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.dispatchEvent(new Event('auth-user-updated'));
};

export const userInitial = (name, fallback = 'U') => {
  return (name?.trim()?.charAt(0) || fallback).toUpperCase();
};
