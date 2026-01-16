import api from "./axios";

export const getAllStaff = () => {
  return api.get("/users?role=staff");
};
