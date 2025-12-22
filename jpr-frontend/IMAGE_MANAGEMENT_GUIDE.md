# Image Management Guide for Static Mode

This guide explains how to manage images when using static frontend data (`VITE_USE_BACKEND=false`).

## 📁 Directory Structure

```
jpr-frontend/src/assets/dynamic_images/
├── news/               # News and events images
│   ├── placeholder-1.svg
│   ├── placeholder-2.svg
│   ├── placeholder-3.svg
│   ├── placeholder-4.svg
│   └── placeholder-5.svg
├── publications/       # Publication covers and PDFs
│   └── placeholder-1.svg
├── projects/          # Project images
│   └── placeholder-1.svg
└── README.md
```

## 🖼️ Adding Your Own Images

### Step 1: Add Image Files

Place your images in the appropriate directory:

```bash
# For news images
jpr-frontend/src/assets/dynamic_images/news/
  - conference-2024-1.jpg
  - conference-2024-2.jpg
  - partnership-announcement.jpg

# For publications
jpr-frontend/src/assets/dynamic_images/publications/
  - technical-paper-cover.jpg
  - research-report.pdf

# For projects  
jpr-frontend/src/assets/dynamic_images/projects/
  - highway-project-1.jpg
  - intersection-study.jpg
```

### Step 2: Import Images in Data Files

Edit the corresponding data file (e.g., `src/data/news.js`):

```javascript
// Import your images at the top
import conference1 from '../assets/dynamic_images/news/conference-2024-1.jpg';
import conference2 from '../assets/dynamic_images/news/conference-2024-2.jpg';
import partnership from '../assets/dynamic_images/news/partnership-announcement.jpg';

export const newsData = [
  {
    id: 1,
    title: "Conference 2024",
    images: [conference1, conference2]  // Use imported images
  },
  {
    id: 2,
    title: "Partnership",
    images: [partnership]
  }
];
```

### Step 3: Update Data Objects

Reference the imported images in your data objects:

```javascript
{
  id: 1,
  title: "Your News Title",
  images: [
    importedImage1,  // ✅ Use imported variable
    importedImage2
  ]
  // NOT: images: ["path/to/image.jpg"]  ❌ Don't use string paths
}
```

## 📋 Image Guidelines

### News Images
- **Format**: JPG, PNG, WebP, SVG
- **Size**: 800x600px recommended (16:9 aspect ratio)
- **Naming**: Descriptive names like `conference-2024-1.jpg`
- **Multiple images**: Supported (array of images)

### Publication Images
- **Covers**: JPG, PNG (400x600px, book aspect ratio)
- **PDFs**: PDF format for full documents
- **Naming**: `publication-title-cover.jpg`, `publication-title.pdf`

### Project Images
- **Format**: JPG, PNG, WebP
- **Size**: 800x600px or larger (16:9 aspect ratio)
- **Naming**: `project-name-1.jpg`, `project-name-2.jpg`

## 🔄 Complete Example: Adding News with Images

### 1. Add image files to folder
```
src/assets/dynamic_images/news/
  ├── safety-conference-main.jpg
  └── safety-conference-presentation.jpg
```

### 2. Update `src/data/news.js`

```javascript
// Import at the top
import safetyConf1 from '../assets/dynamic_images/news/safety-conference-main.jpg';
import safetyConf2 from '../assets/dynamic_images/news/safety-conference-presentation.jpg';

export const newsData = [
  {
    id: 6,  // New ID
    title: "Safety Conference 2024",
    summary: "Annual safety conference highlights...",
    content: "Full content here...",
    category: "Conference",
    event_date: "2024-06-15",
    image_url: null,
    created_at: "2024-06-10T10:00:00Z",
    updated_at: "2024-06-10T10:00:00Z",
    images: [
      safetyConf1,  // First image
      safetyConf2   // Second image
    ]
  },
  // ... other news items
];
```

## 🎨 Using Placeholder Images

The project includes SVG placeholder images that you can use temporarily:

```javascript
import placeholder1 from '../assets/dynamic_images/news/placeholder-1.svg';
import placeholder2 from '../assets/dynamic_images/news/placeholder-2.svg';

// Use in your data
images: [placeholder1, placeholder2]
```

## 🔍 Image Optimization Tips

### Before Adding Images:

1. **Resize images** to appropriate dimensions (800x600 for news/projects)
2. **Compress images** to reduce file size (use tools like TinyPNG, ImageOptim)
3. **Use WebP format** for better compression (modern browsers support it)
4. **Keep file sizes** under 500KB per image

### Recommended Tools:
- **Online**: TinyPNG, Squoosh.app, Compressor.io
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **CLI**: `imagemagick`, `sharp` (Node.js)

## 📦 Publications with PDFs

For publications, you can include both cover images and PDF files:

```javascript
// In src/data/publications.js
import techPaperCover from '../assets/dynamic_images/publications/tech-paper-cover.jpg';
import techPaperPDF from '../assets/dynamic_images/publications/tech-paper.pdf';

export const publicationsData = [
  {
    id: 1,
    title: "Technical Paper",
    // ... other fields
    pdf_path: techPaperPDF,  // PDF file
    cover_image: techPaperCover  // Optional cover image
  }
];
```

## ⚠️ Important Notes

### DO:
- ✅ Import images at the top of data files
- ✅ Use imported variables in data objects
- ✅ Optimize images before adding them
- ✅ Use descriptive file names
- ✅ Keep images in appropriate subdirectories

### DON'T:
- ❌ Use string paths directly in data objects
- ❌ Add very large images (>2MB)
- ❌ Use spaces in file names (use hyphens instead)
- ❌ Mix backend URLs with local imports

## 🔄 Switching Between Backend and Local Images

### Backend Mode (VITE_USE_BACKEND=true)
- Images come from backend API URLs
- Stored in backend uploads folder or Cloudinary
- Data files not used

### Static Mode (VITE_USE_BACKEND=false)
- Images come from local imports
- Stored in `src/assets/dynamic_images/`
- Data files with imports are used

## 🚀 Deployment Considerations

When deploying in static mode:

1. **All images are bundled** with the app
2. **Build size increases** with more/larger images
3. **Optimize images** to keep bundle size reasonable
4. **Consider lazy loading** for many images
5. **Use CDN** for very large image collections (optional)

## 📝 Quick Checklist

Before deploying in static mode:

- [ ] All images added to `src/assets/dynamic_images/`
- [ ] Images imported in data files
- [ ] Image references updated in data objects
- [ ] Images optimized and compressed
- [ ] File names are descriptive and URL-safe
- [ ] Tested in development mode
- [ ] Build size is acceptable

## 🆘 Troubleshooting

### Images not showing?
1. Check import path is correct
2. Verify file exists in the folder
3. Check file extension matches import
4. Clear browser cache and rebuild

### Build errors?
1. Check all imports have matching files
2. Verify no typos in import statements
3. Ensure file names don't have special characters
4. Check file permissions

### Large bundle size?
1. Compress images before adding
2. Use WebP format instead of PNG/JPG
3. Reduce image dimensions
4. Consider using external CDN for large collections