import api from "../apiClient";

const adminContactService = {
  // list with pagination & search
  async list(params = {}) {
    const res = await api.get("/admin/contact", { params });
    return res.data; // { data, pagination }
  },

  // get single message
  async get(id) {
    const res = await api.get(`/admin/contact/${id}`);
    return res.data;
  },

  // delete message
  async remove(id) {
    const res = await api.delete(`/admin/contact/${id}`);
    return res.data;
  },
};

export default adminContactService;
