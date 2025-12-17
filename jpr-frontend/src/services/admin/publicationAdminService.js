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

async create(data) {
  const res = await api.post("/admin/publications", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
},

async update(id, data) {
  const res = await api.put(`/admin/publications/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
},

  async remove(id) {
    const res = await api.delete(`/admin/publications/${id}`);
    return res.data;
  },
};

export default publicationAdminService;
