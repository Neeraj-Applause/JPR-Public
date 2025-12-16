import api from "../apiClient";

const projectAdminService = {
  // Admin sees ALL (published + drafts)
  async list(params = {}) {
    const res = await api.get("/admin/projects", { params });
    return res.data;
  },

  async get(id) {
    const res = await api.get(`/admin/projects/${id}`);
    return res.data;
  },

  async create(payload) {
    const res = await api.post("/admin/projects", payload);
    return res.data;
  },

  async update(id, payload) {
    const res = await api.put(`/admin/projects/${id}`, payload);
    return res.data;
  },

  async remove(id) {
    const res = await api.delete(`/admin/projects/${id}`);
    return res.data;
  },
};

export default projectAdminService;
