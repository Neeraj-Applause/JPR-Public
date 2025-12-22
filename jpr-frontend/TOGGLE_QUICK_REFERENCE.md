# Backend Toggle - Quick Reference

## 🔄 Switch Modes

### Enable Backend Mode (API calls)
```bash
# In jpr-frontend/.env
VITE_USE_BACKEND=true
```

### Enable Static Mode (no backend)
```bash
# In jpr-frontend/.env  
VITE_USE_BACKEND=false
```

## 🚀 Quick Setup

### Option 1: Copy example files
```bash
# For backend mode
cp .env.backend .env

# For static mode  
cp .env.static .env
```

### Option 2: Edit .env directly
```bash
# Edit the VITE_USE_BACKEND value in .env file
VITE_USE_BACKEND=true   # Backend mode
VITE_USE_BACKEND=false  # Static mode
```

## ✅ Verification

After changing the toggle, restart your dev server:
```bash
npm run dev
```

Check browser console for confirmation:
- Backend mode: API calls visible in Network tab
- Static mode: "Contact form submission (static mode)" logs in Console

## 📁 Files Modified

- `src/config/appConfig.js` - Toggle configuration
- `src/services/dataService.js` - Data abstraction layer  
- `src/data/*.js` - Static data files
- Components updated to use dataService instead of direct API calls

## 🎯 What Works in Both Modes

- ✅ News/Events listing and display
- ✅ Publications listing and filtering  
- ✅ Projects listing and filtering
- ✅ Contact form (logs in static mode)
- ✅ Search and pagination
- ✅ All UI functionality identical

## ⚠️ Admin Dashboard

Admin routes always require backend (authentication needed):
- Login: Always uses backend API
- Admin CRUD: Always uses backend API  
- File uploads: Always uses backend API

The toggle only affects public pages.