// Data abstraction layer - switches between backend API and static data
import { isBackendEnabled } from '../config/appConfig';

// Import static data
import { newsData } from '../data/news';
import { publicationsData } from '../data/publications';
import { projectsData } from '../data/projects';
import { careersData } from '../data/careers';

// Import existing API services
import newsService from './newsService';
import publicationService from './publicationService';
import projectService from './projectService';
import careerService from './careerService';
import contactService from './contactService';

// Helper function to simulate API response structure for static data
const createApiResponse = (data, page = 1, limit = null) => {
  // If no limit is specified, return all data
  if (!limit) {
    return {
      data: data,
      pagination: {
        page: 1,
        limit: data.length,
        total: data.length
      }
    };
  }
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total: data.length
    }
  };
};

// Helper function to filter and sort static data
const filterAndSortData = (data, params = {}) => {
  let filteredData = [...data];
  
  // Apply search filter
  if (params.search && params.search.trim()) {
    const searchTerm = params.search.toLowerCase();
    filteredData = filteredData.filter(item => {
      return (
        (item.title && item.title.toLowerCase().includes(searchTerm)) ||
        (item.summary && item.summary.toLowerCase().includes(searchTerm)) ||
        (item.content && item.content.toLowerCase().includes(searchTerm)) ||
        (item.category && item.category.toLowerCase().includes(searchTerm)) ||
        (item.authors && item.authors.toLowerCase().includes(searchTerm)) ||
        (item.abstract && item.abstract.toLowerCase().includes(searchTerm)) ||
        (item.type && item.type.toLowerCase().includes(searchTerm)) ||
        (item.client && item.client.toLowerCase().includes(searchTerm)) ||
        (item.location && item.location.toLowerCase().includes(searchTerm)) ||
        (item.project_title && item.project_title.toLowerCase().includes(searchTerm)) ||
        (item.description && item.description.toLowerCase().includes(searchTerm))
      );
    });
  }
  
  // Apply type filter for publications
  if (params.type && params.type !== 'all') {
    filteredData = filteredData.filter(item => item.type === params.type);
  }
  
  // Apply category filter for projects
  if (params.category && params.category !== 'all') {
    filteredData = filteredData.filter(item => item.category === params.category);
  }
  
  // Apply published filter
  if (params.published === 'true' || params.published === 1 || params.published === true) {
    filteredData = filteredData.filter(item => item.is_published === 1);
  } else if (params.published === 'false' || params.published === 0 || params.published === false) {
    filteredData = filteredData.filter(item => item.is_published === 0);
  }
  
  // Apply sorting
  const sortField = params.sort || 'created_at';
  const sortOrder = params.order === 'asc' ? 1 : -1;
  
  // Helper function to parse dates in multiple formats
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    
    // Check if date is in dd-mm-yyyy format
    if (typeof dateStr === 'string' && dateStr.match(/^\d{2}-\d{2}-\d{4}$/)) {
      const [day, month, year] = dateStr.split('-');
      return new Date(`${year}-${month}-${day}`);
    }
    
    // Otherwise parse as standard date format
    return new Date(dateStr);
  };
  
  filteredData.sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    // Handle date fields
    if (sortField.includes('date') || sortField === 'created_at' || sortField === 'updated_at') {
      aVal = parseDate(aVal);
      bVal = parseDate(bVal);
    }
    
    // Handle string fields
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * sortOrder;
    }
    
    // Handle numeric and date fields
    if (aVal < bVal) return -1 * sortOrder;
    if (aVal > bVal) return 1 * sortOrder;
    return 0;
  });
  
  return filteredData;
};

// News data service
export const getNews = async (params = {}) => {
  if (isBackendEnabled()) {
    return await newsService.list(params);
  }
  
  const filteredData = filterAndSortData(newsData, params);
  return createApiResponse(filteredData, params.page, params.limit);
};

export const getNewsById = async (id) => {
  if (isBackendEnabled()) {
    return await newsService.get(id);
  }
  
  const item = newsData.find(news => news.id === Number(id));
  if (!item) {
    throw new Error('News not found');
  }
  return item;
};

export const getNewsByYear = async (year) => {
  if (isBackendEnabled()) {
    // Assuming there's a method for this in the service
    const response = await fetch(`${newsService.baseURL}/news/year/${year}`);
    return await response.json();
  }
  
  const yearData = newsData.filter(news => {
    if (!news.event_date) return false;
    return new Date(news.event_date).getFullYear() === Number(year);
  });
  
  return yearData;
};

// Publications data service
export const getPublications = async (params = {}) => {
  if (isBackendEnabled()) {
    return await publicationService.list(params);
  }
  
  const filteredData = filterAndSortData(publicationsData, params);
  return createApiResponse(filteredData, params.page, params.limit);
};

export const getPublicationById = async (id) => {
  if (isBackendEnabled()) {
    return await publicationService.get(id);
  }
  
  const item = publicationsData.find(pub => pub.id === Number(id));
  if (!item) {
    throw new Error('Publication not found');
  }
  return item;
};

export const getPublicationTypeCounts = async () => {
  if (isBackendEnabled()) {
    return await publicationService.getTypeCounts();
  }
  
  const counts = { All: 0 };
  const publishedPubs = publicationsData.filter(pub => pub.is_published === 1);
  
  publishedPubs.forEach(pub => {
    counts[pub.type] = (counts[pub.type] || 0) + 1;
    counts.All += 1;
  });
  
  return counts;
};

export const getPublicationFocusAreas = async () => {
  if (isBackendEnabled()) {
    return await publicationService.getFocusAreas();
  }
  
  const focusAreas = {};
  const publishedPubs = publicationsData.filter(pub => pub.is_published === 1);
  
  publishedPubs.forEach(pub => {
    focusAreas[pub.type] = (focusAreas[pub.type] || 0) + 1;
  });
  
  return Object.entries(focusAreas).map(([type, total]) => ({ type, total }))
    .sort((a, b) => b.total - a.total);
};

export const getPublicationsByYear = async (year) => {
  if (isBackendEnabled()) {
    // Assuming there's a method for this in the service
    const response = await fetch(`${publicationService.baseURL}/publications/year/${year}`);
    return await response.json();
  }
  
  const yearData = publicationsData.filter(pub => {
    if (!pub.pub_date) return false;
    return new Date(pub.pub_date).getFullYear() === Number(year);
  });
  
  return yearData;
};

// Projects data service
export const getProjects = async (params = {}) => {
  if (isBackendEnabled()) {
    return await projectService.list(params);
  }
  
  let filteredData = filterAndSortData(projectsData, params);
  
  // Custom sorting for projects by period (ongoing first, then by year descending)
  filteredData.sort((a, b) => {
    const periodA = a.period || "";
    const periodB = b.period || "";
    
    // Check if period contains "present" or "ongoing"
    const aIsOngoing = periodA.toLowerCase().includes("present") || periodA.toLowerCase().includes("ongoing");
    const bIsOngoing = periodB.toLowerCase().includes("present") || periodB.toLowerCase().includes("ongoing");
    
    // Ongoing projects come first
    if (aIsOngoing && !bIsOngoing) return -1;
    if (!aIsOngoing && bIsOngoing) return 1;
    
    // Extract the latest year from period (e.g., "2023-24" -> 2024, "2025" -> 2025)
    const extractYear = (period) => {
      const years = period.match(/\d{4}/g);
      if (!years || years.length === 0) return 0;
      return Math.max(...years.map(y => parseInt(y)));
    };
    
    const yearA = extractYear(periodA);
    const yearB = extractYear(periodB);
    
    // Sort by year descending (latest first)
    return yearB - yearA;
  });
  
  return createApiResponse(filteredData, params.page, params.limit);
};

export const getProjectById = async (id) => {
  if (isBackendEnabled()) {
    return await projectService.get(id);
  }
  
  const item = projectsData.find(project => project.id === Number(id));
  if (!item) {
    throw new Error('Project not found');
  }
  return item;
};

export const getProjectsByCategory = async (category) => {
  if (isBackendEnabled()) {
    return await projectService.getByCategory(category);
  }
  
  const categoryData = projectsData.filter(project => {
    if (!project.category) return false;
    return project.category === category;
  });
  
  // Sort by period: ongoing first, then by year descending
  categoryData.sort((a, b) => {
    const periodA = a.period || "";
    const periodB = b.period || "";
    
    // Check if period contains "present" or "ongoing"
    const aIsOngoing = periodA.toLowerCase().includes("present") || periodA.toLowerCase().includes("ongoing");
    const bIsOngoing = periodB.toLowerCase().includes("present") || periodB.toLowerCase().includes("ongoing");
    
    // Ongoing projects come first
    if (aIsOngoing && !bIsOngoing) return -1;
    if (!aIsOngoing && bIsOngoing) return 1;
    
    // Extract the latest year from period (e.g., "2023-24" -> 2024, "2025" -> 2025)
    const extractYear = (period) => {
      const years = period.match(/\d{4}/g);
      if (!years || years.length === 0) return 0;
      return Math.max(...years.map(y => parseInt(y)));
    };
    
    const yearA = extractYear(periodA);
    const yearB = extractYear(periodB);
    
    // Sort by year descending (latest first)
    return yearB - yearA;
  });
  
  return { data: categoryData };
};

export const getProjectCategoryCounts = async () => {
  if (isBackendEnabled()) {
    // Assuming there might be a method for this in the future
    const response = await fetch(`${projectService.baseURL}/projects/category-counts`);
    return await response.json();
  }
  
  const counts = { All: 0 };
  const publishedProjects = projectsData.filter(project => project.is_published === 1);
  
  publishedProjects.forEach(project => {
    counts[project.category] = (counts[project.category] || 0) + 1;
    counts.All += 1;
  });
  
  return counts;
};

// Careers data service
export const getCareers = async (params = {}) => {
  if (isBackendEnabled()) {
    return await careerService.getAll();
  }
  
  const filteredData = filterAndSortData(careersData, params);
  return createApiResponse(filteredData, params.page, params.limit);
};

export const getCareerById = async (id) => {
  if (isBackendEnabled()) {
    // Assuming there might be a get method in the future
    const allCareers = await careerService.getAll();
    const item = allCareers.find(career => career.id === Number(id));
    if (!item) {
      throw new Error('Career not found');
    }
    return item;
  }
  
  const item = careersData.find(career => career.id === Number(id));
  if (!item) {
    throw new Error('Career not found');
  }
  return item;
};

// Contact service
export const submitContactForm = async (formData) => {
  if (isBackendEnabled()) {
    return await contactService.submit(formData);
  }
  
  // For static mode, log the data and return success
  console.log('Contact form submission (static mode):', formData);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Thank you for your message. We will get back to you soon.'
  };
};

// Export all functions as default object for easier importing
const dataService = {
  // News
  getNews,
  getNewsById,
  getNewsByYear,
  
  // Publications
  getPublications,
  getPublicationById,
  getPublicationTypeCounts,
  getPublicationFocusAreas,
  getPublicationsByYear,
  
  // Projects
  getProjects,
  getProjectById,
  getProjectsByCategory,
  getProjectCategoryCounts,
  
  // Careers
  getCareers,
  getCareerById,
  
  // Contact
  submitContactForm
};

export default dataService;