import api from "./apiClient";

const projectService = {
  // ✅ list with optional search/sort/pagination/filter
  // params example:
  // { search, category, published, sort, order, page, limit }
  async list(params = {}) {
    const res = await api.get("/projects", { params });
    return res.data; // { data, pagination }
  },

  // ✅ get single project by id
  async get(id) {
    const res = await api.get(`/projects/${id}`);
    return res.data;
  },

  // ✅ get projects by category
  async getByCategory(category) {
    const res = await api.get(`/projects/category/${category}`);
    return res.data;
  },

  // ✅ create project
  async create(payload) {
    const res = await api.post("/projects", payload);
    return res.data;
  },

  // ✅ update project
  async update(id, payload) {
    const res = await api.put(`/projects/${id}`, payload);
    return res.data;
  },

  // ✅ delete project
  async remove(id) {
    const res = await api.delete(`/projects/${id}`);
    return res.data;
  },
};

export default projectService;
