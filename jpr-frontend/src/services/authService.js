import api from './apiClient';

const authService = {
  async login(email, password) {
    const res = await api.post('/auth/login', { email, password });
    // save token + user
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    return res.data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAdmin() {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }
};

export default authService;
