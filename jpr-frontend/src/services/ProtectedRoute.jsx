import { Navigate } from 'react-router-dom';
import authService from './authService';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  try {
    const token = localStorage.getItem('token');
    const user = authService.getCurrentUser();

    if (!token || !user) {
      return <Navigate to="/admin/login" replace />;
    }

    if (adminOnly && user?.role !== 'admin') {
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    console.error('ProtectedRoute error:', error);
    return <Navigate to="/admin/login" replace />;
  }
};

export default ProtectedRoute;
