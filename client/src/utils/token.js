// 🔥 Get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// 🔥 Set token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// 🔥 Remove token (logout)
export const removeToken = () => {
  localStorage.removeItem("token");
};

// 🔥 Get role
export const getRole = () => {
  return localStorage.getItem("role");
};

// 🔥 Set role
export const setRole = (role) => {
  localStorage.setItem("role", role);
};

// 🔥 Clear all auth
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};