// src/services/admin/newsAdminService.js
import api from "../apiClient";

const newsAdminService = {
  // ADMIN: list (includes drafts)
  async list(params = {}) {
    const res = await api.get("/admin/news", { params });
    return res.data;
  },

  async get(id) {
    const res = await api.get(`/admin/news/${id}`);
    return res.data;
  },

  async create(payload) {
    const res = await api.post("/admin/news", payload);
    return res.data;
  },

  async update(id, payload) {
    const res = await api.put(`/admin/news/${id}`, payload);
    return res.data;
  },

  async remove(id) {
    const res = await api.delete(`/admin/news/${id}`);
    return res.data;
  },

  // Multipart (images)
  async createMultipart(data) {
    const res = await api.post("/admin/news", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },

  async updateMultipart(id, data) {
    const res = await api.put(`/admin/news/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },
};

export default newsAdminService;
