import api from "./axios";

// Login
export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

// Register
export const registerUser = (data) => {
  return api.post("/auth/register", data);
};