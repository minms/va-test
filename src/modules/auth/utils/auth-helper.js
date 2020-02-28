export function getToken() {
  return localStorage.getItem('auth.token') || null;
}