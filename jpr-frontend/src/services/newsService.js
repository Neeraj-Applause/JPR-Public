// src/services/newsService.js
import api from "./apiClient";

const newsService = {
  // list with optional search/sort/pagination
  async list(params = {}) {
    const res = await api.get("/news", { params });
    return res.data; // { data, pagination }
  },

  async get(id) {
    const res = await api.get(`/news/${id}`);
    return res.data;
  },

  async create(payload) {
    const res = await api.post("/news", payload);
    return res.data;
  },

  async update(id, payload) {
    const res = await api.put(`/news/${id}`, payload);
    return res.data;
  },

  async remove(id) {
    const res = await api.delete(`/news/${id}`);
    return res.data;
  },

  async createMultipart(data) {
    const res = await api.post("/news", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },

  async updateMultipart(id, data) {
    const res = await api.put(`/news/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  }

};

export default newsService;
