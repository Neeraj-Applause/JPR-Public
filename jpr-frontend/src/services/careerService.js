import api from './apiClient';

const careerService = {
  getAll() {
    return api.get('/careers').then(res => res.data);
  }
};

export default careerService;
