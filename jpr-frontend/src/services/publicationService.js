import api from "./apiClient";

const publicationService = {
  // ✅ list with optional search/sort/pagination/filter
  // params example:
  // { search, type, published, sort, order, page, limit }
  async list(params = {}) {
    const res = await api.get("/publications", { params });
    return res.data; // { data, pagination }
  },

  // ✅ get single publication by id
  async get(id) {
    const res = await api.get(`/publications/${id}`);
    return res.data;
  },

  // ✅ get publications by year
  async getByYear(year) {
    const res = await api.get(`/publications/year/${year}`);
    return res.data;
  },

  // ✅ create publication (JSON)
  async create(payload) {
    const res = await api.post("/publications", payload);
    return res.data;
  },

  // ✅ update publication (JSON)
  async update(id, payload) {
    const res = await api.put(`/publications/${id}`, payload);
    return res.data;
  },

  // ✅ delete publication
  async remove(id) {
    const res = await api.delete(`/publications/${id}`);
    return res.data;
  },

  async getFocusAreas() {
  const res = await api.get("/publications/focus-areas");
  return res.data;
},
};

export default publicationService;
