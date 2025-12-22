// Test file to verify the backend toggle functionality
// Run this with: node src/test-toggle.js

import { APP_CONFIG, isBackendEnabled } from './config/appConfig.js';

console.log('=== Backend Toggle Test ===');
console.log('VITE_USE_BACKEND environment variable:', process.env.VITE_USE_BACKEND);
console.log('APP_CONFIG.USE_BACKEND:', APP_CONFIG.USE_BACKEND);
console.log('isBackendEnabled():', isBackendEnabled());
console.log('API_URL:', APP_CONFIG.API_URL);

if (isBackendEnabled()) {
  console.log('✅ Backend mode: Will use API calls');
} else {
  console.log('✅ Static mode: Will use local data files');
}

console.log('\nTo switch modes:');
console.log('- Backend ON:  Set VITE_USE_BACKEND=true in .env');
console.log('- Backend OFF: Set VITE_USE_BACKEND=false in .env');
console.log('========================');