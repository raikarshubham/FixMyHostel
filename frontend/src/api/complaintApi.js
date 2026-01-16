import api from "./axios";

export const createComplaint = (data) =>
  api.post("/complaints", data);

export const getMyComplaints = () =>
  api.get("/complaints/my");

export const getComplaintById = (id) =>
  api.get(`/complaints/${id}`);
