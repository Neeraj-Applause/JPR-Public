# Backend Toggle Implementation

This implementation provides a single toggle to switch between backend API calls and static frontend data.

## 🔧 How to Use the Toggle

### Environment Variable Method

Edit the `.env` file in the frontend root:

```bash
# Backend mode (default) - uses API calls
VITE_USE_BACKEND=true

# Static mode - uses local data files
VITE_USE_BACKEND=false
```

### Configuration

The toggle is controlled by `jpr-frontend/src/config/appConfig.js`:

```javascript
export const APP_CONFIG = {
  USE_BACKEND: import.meta.env.VITE_USE_BACKEND === 'true',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
};
```

## 📁 Static Data Files

When `VITE_USE_BACKEND=false`, the app uses these local data files:

```
jpr-frontend/src/data/
├── news.js          # News/events data
├── publications.js  # Publications data  
├── projects.js      # Projects data
└── careers.js       # Career listings data
```

Each file exports an array of objects matching the database schema.

## 🔄 Data Abstraction Layer

All components use `jpr-frontend/src/services/dataService.js` which automatically switches between:

- **Backend ON**: Makes API calls using existing services
- **Backend OFF**: Returns static data from local files

### Available Functions

```javascript
// News
getNews(params)
getNewsById(id)
getNewsByYear(year)

// Publications  
getPublications(params)
getPublicationById(id)
getPublicationTypeCounts()
getPublicationFocusAreas()
getPublicationsByYear(year)

// Projects
getProjects(params)
getProjectById(id)
getProjectsByCategory(category)

// Careers
getCareers(params)
getCareerById(id)

// Contact
submitContactForm(formData)
```

## 🎯 Component Updates

Updated components to use the data abstraction layer:

- `NewsMainSection.jsx` - Uses `getNews()`
- `PublicationsMainSection.jsx` - Uses `getPublications()`, `getPublicationTypeCounts()`
- `PublicationsHero.jsx` - Uses `getPublicationFocusAreas()`
- `ProjectsMainSection.jsx` - Uses `getProjects()`, `getProjectsByCategory()`
- `ContactMainSection.jsx` - Uses `submitContactForm()`

## 🔍 Testing the Toggle

1. **Backend Mode** (default):
   ```bash
   # In .env file
   VITE_USE_BACKEND=true
   ```
   - App makes API calls to backend
   - Contact form submits to API
   - Data comes from database

2. **Static Mode**:
   ```bash
   # In .env file  
   VITE_USE_BACKEND=false
   ```
   - App uses local data files
   - Contact form logs to console
   - No API calls made

## 📋 Contact Form Behavior

### Backend ON
- Submits form data to `/api/contact` endpoint
- Shows success/error messages from API response

### Backend OFF  
- Logs form data to browser console
- Shows success message without sending
- No network requests made

## ⚠️ Important Notes

1. **No UI Changes**: All components work identically in both modes
2. **Same Data Structure**: Static data matches database schema exactly  
3. **Search/Filter**: Works in both modes with same functionality
4. **Pagination**: Simulated in static mode
5. **Admin Routes**: Not affected (still require backend for authentication)

## 🚀 Deployment

For production deployment without backend:

1. Set `VITE_USE_BACKEND=false` in production environment
2. Update static data files as needed
3. Deploy frontend only

The app will work completely standalone without any backend dependencies.