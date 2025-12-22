// Global application configuration
export const APP_CONFIG = {
  // Toggle between backend API calls and static frontend data
  USE_BACKEND: import.meta.env.VITE_USE_BACKEND === 'true',
  
  // API base URL (only used when USE_BACKEND is true)
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
};

// Helper function to check if backend is enabled
export const isBackendEnabled = () => APP_CONFIG.USE_BACKEND;

// Helper function to get API URL
export const getApiUrl = () => APP_CONFIG.API_URL;