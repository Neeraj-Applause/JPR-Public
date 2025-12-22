# Dynamic Images Directory

This directory contains images used by the static data when `VITE_USE_BACKEND=false`.

## Directory Structure

```
dynamic_images/
├── news/           # News and events images
├── publications/   # Publication cover images, PDFs
├── projects/       # Project images
└── README.md       # This file
```

## Image Guidelines

### News Images
- Format: JPG, PNG, WebP
- Recommended size: 800x600px or 16:9 aspect ratio
- Naming: `news-1-1.jpg`, `news-1-2.jpg` (news-{id}-{index})

### Publication Images  
- Format: JPG, PNG for covers; PDF for documents
- Recommended size: 400x600px for covers (book aspect ratio)
- Naming: `pub-{id}-cover.jpg`, `pub-{id}.pdf`

### Project Images
- Format: JPG, PNG, WebP
- Recommended size: 800x600px or 16:9 aspect ratio  
- Naming: `project-{id}-1.jpg`, `project-{id}-2.jpg`

## Adding Images

1. Place images in the appropriate subdirectory
2. Update the corresponding data file (`src/data/*.js`)
3. Import images at the top of the data file
4. Reference imported images in the data objects

## Example Usage

```javascript
// In src/data/news.js
import newsImage1 from '../assets/dynamic_images/news/news-1-1.jpg';
import newsImage2 from '../assets/dynamic_images/news/news-1-2.jpg';

export const newsData = [
  {
    id: 1,
    title: "Sample News",
    images: [newsImage1, newsImage2]
  }
];
```