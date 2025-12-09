import api from './apiClient';

const publicationService = {
  getAll() {
    return api.get('/publications').then(res => res.data);
  },
  // add admin create/update/delete later if you want
};

export default publicationService;
