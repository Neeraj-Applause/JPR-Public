import api from "../apiClient";

const publicationAdminService = {
  // Admin list → can see drafts + published
  async list(params = {}) {
    const res = await api.get("/admin/publications", { params });
    return res.data;
  },

  async get(id) {
    const res = await api.get(`/admin/publications/${id}`);
    return res.data;
  },

  async create(payload) {
    const res = await api.post("/admin/publications", payload);
    return res.data;
  },

  async update(id, payload) {
    const res = await api.put(`/admin/publications/${id}`, payload);
    return res.data;
  },

  async remove(id) {
    const res = await api.delete(`/admin/publications/${id}`);
    return res.data;
  },
};

export default publicationAdminService;
