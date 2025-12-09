import api from './apiClient';

const contactService = {
  submit(form) {
    return api.post('/contact', form).then(res => res.data);
  }
};

export default contactService;
