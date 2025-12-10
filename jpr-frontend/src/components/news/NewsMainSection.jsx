import { useEffect, useMemo, useState } from "react";
import { Calendar, ImageIcon, Search, Tag, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import newsService from "../../services/newsService";

function formatDate(dateStr) {
  if (!dateStr) return "Date not specified";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NewsMainSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState({}); // <-- which items are expanded
  const [selectedImage, setSelectedImage] = useState(null); // <-- for image modal

  const loadNews = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await newsService.list({
        sort: "event_date",
        order: "desc",
        page: 1,
        limit: 100,
        search: "",
      });
      setNews(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const years = useMemo(() => {
    const set = new Set();
    news.forEach((n) => {
      if (n.event_date) {
        const y = new Date(n.event_date).getFullYear();
        if (!Number.isNaN(y)) set.add(y);
      }
    });
    return Array.from(set).sort((a, b) => b - a);
  }, [news]);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      if (yearFilter !== "all" && item.event_date) {
        const y = new Date(item.event_date).getFullYear();
        if (String(y) !== String(yearFilter)) return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = `${item.title || ""} ${item.summary || ""} ${
          item.category || ""
        }`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [news, search, yearFilter]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openImageModal = (imageUrl, title, allImages = [], currentIndex = 0) => {
    setSelectedImage({ 
      url: imageUrl, 
      title, 
      allImages, 
      currentIndex 
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage || !selectedImage.allImages) return;
    
    const { allImages, currentIndex } = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    } else {
      newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage({
      ...selectedImage,
      url: allImages[newIndex],
      currentIndex: newIndex
    });
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;
      
      switch (event.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowLeft':
          if (selectedImage.allImages && selectedImage.allImages.length > 1) {
            navigateImage('prev');
          }
          break;
        case 'ArrowRight':
          if (selectedImage.allImages && selectedImage.allImages.length > 1) {
            navigateImage('next');
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="w-full bg-[#f5f5f5] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Controls row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Year filter pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span className="text-slate-500 mr-1">Filter by year:</span>
            <button
              type="button"
              onClick={() => setYearFilter("all")}
              className={`rounded-full px-3 py-1 border text-xs sm:text-sm transition ${
                yearFilter === "all"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setYearFilter(year)}
                className={`rounded-full px-3 py-1 border text-xs sm:text-sm transition ${
                  yearFilter === year
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Search box */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 text-xs sm:text-sm"
          >
            <div className="relative w-full sm:w-64">
              <Search className="h-4 w-4 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search news, events, categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-7 pr-2 py-1.5 border border-slate-200 rounded-full text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </form>
        </div>

        {/* Content */}
        <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-4 sm:p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-2 text-xs text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <span>Loading news & events...</span>
              </div>
            </div>
          ) : error ? (
            <p className="text-sm text-red-600 text-center py-6">{error}</p>
          ) : filteredNews.length === 0 ? (
            <p className="text-sm text-slate-500 text-center py-6">
              No news found for the selected filters.
            </p>
          ) : (
            <ul className="space-y-4">
              {filteredNews.map((item) => {
                const imagesArray = Array.isArray(item.images)
                  ? item.images.filter(img => img && img !== null)
                  : [];
                const firstImage =
                  imagesArray.length > 0
                    ? imagesArray[0]
                    : item.image_url || null;

                const isExpanded = !!expanded[item.id];

                return (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all p-4"
                  >
                    {/* Thumbnail */}
                    <div className="w-full sm:w-40 flex-shrink-0">
                      {firstImage ? (
                        <div className="h-32 sm:h-28 w-full rounded-xl overflow-hidden bg-slate-100 relative group">
                          <img
                            src={firstImage}
                            alt={item.title}
                            className={`h-full w-full object-cover ${
                              imagesArray.length > 0 ? 'cursor-pointer hover:scale-105 transition-transform' : ''
                            }`}
                            onClick={() => imagesArray.length > 0 && openImageModal(firstImage, item.title, imagesArray, 0)}
                            loading="lazy"
                          />
                          {imagesArray.length > 1 && (
                            <div className="absolute bottom-1 right-1 bg-black bg-opacity-60 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                              +{imagesArray.length - 1}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-32 sm:h-28 w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-300">
                          <ImageIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5">
                          <Calendar className="h-3 w-3" />
                          {formatDate(item.event_date || item.created_at)}
                        </span>
                        {item.category && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
                            <Tag className="h-3 w-3" />
                            {item.category}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      {/* Summary (collapsed / expanded) */}
                      {item.summary && (
                        <p
                          className={`text-xs sm:text-sm text-slate-600 ${
                            isExpanded ? "" : "line-clamp-3"
                          }`}
                        >
                          {item.summary}
                        </p>
                      )}

                      {/* Full content when expanded */}
                      {isExpanded && item.content && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-700 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}

                      {/* Image gallery when expanded */}
                      {isExpanded && imagesArray.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <h4 className="text-xs font-medium text-slate-700 flex items-center gap-1">
                            <ImageIcon className="h-3 w-3" />
                            {imagesArray.length === 1 ? 'Image' : `Images (${imagesArray.length})`}
                          </h4>
                          <div className={`grid gap-2 ${
                            imagesArray.length === 1 
                              ? 'grid-cols-1 max-w-md' 
                              : imagesArray.length === 2 
                                ? 'grid-cols-2' 
                                : 'grid-cols-2 sm:grid-cols-3'
                          }`}>
                            {imagesArray.map((imageUrl, idx) => (
                              <div
                                key={idx}
                                className={`rounded-lg overflow-hidden bg-slate-100 border border-slate-200 ${
                                  imagesArray.length === 1 ? 'aspect-video' : 'aspect-square'
                                }`}
                              >
                                <img
                                  src={imageUrl}
                                  alt={`${item.title} - Image ${idx + 1}`}
                                  className="h-full w-full object-cover hover:scale-105 transition-transform cursor-pointer"
                                  onClick={() => openImageModal(imageUrl, item.title, imagesArray, idx)}
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Toggle button */}
                      {(item.summary || item.content) && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="mt-2 text-[11px] sm:text-xs font-semibold text-primary hover:text-primary/80"
                        >
                          {isExpanded ? "Show less" : "Read full news"}
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation arrows (only show if multiple images) */}
            {selectedImage.allImages && selectedImage.allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 rounded-b-lg">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{selectedImage.title}</p>
                {selectedImage.allImages && selectedImage.allImages.length > 1 && (
                  <p className="text-xs text-gray-300">
                    {selectedImage.currentIndex + 1} of {selectedImage.allImages.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
