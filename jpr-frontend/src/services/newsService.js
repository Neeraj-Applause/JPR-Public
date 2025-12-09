import api from './apiClient';

const newsService = {
  getAll() {
    return api.get('/news').then(res => res.data);
  },

  getByYear(year) {
    return api.get(`/news/year/${year}`).then(res => res.data);
  },

  // admin
  create(news) {
    return api.post('/admin/news', news).then(res => res.data);
  },

  update(id, news) {
    return api.put(`/admin/news/${id}`, news).then(res => res.data);
  },

  remove(id) {
    return api.delete(`/admin/news/${id}`).then(res => res.data);
  }
};

export default newsService;
