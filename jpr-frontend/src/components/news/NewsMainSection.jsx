import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  ImageIcon,
  Search,
  Tag,
  Loader2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

// Single news card with alternating layout + inline carousel
function NewsCard({ item, index, onImageClick }) {
  // Prepare images array (images[] first, then fallback to image_url if needed)
  let imagesArray = Array.isArray(item.images)
    ? item.images.filter((img) => img && img !== null)
    : [];

  if (imagesArray.length === 0 && item.image_url) {
    imagesArray = [item.image_url];
  }

  const hasImages = imagesArray.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  // Ensure activeIndex always in range
  useEffect(() => {
    if (!hasImages) return;
    if (activeIndex >= imagesArray.length) {
      setActiveIndex(0);
    }
  }, [imagesArray.length, activeIndex, hasImages]);

  // Auto-slide when multiple images
  useEffect(() => {
    if (!hasImages || imagesArray.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagesArray.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [imagesArray.length, hasImages]);

  const isImageLeft = index % 2 === 1; // alternate

  const layoutClass = hasImages
    ? isImageLeft
      ? "md:flex-row"
      : "md:flex-row-reverse"
    : "md:flex-col";

  const mainText =
    item.content && item.content.trim().length > 0
      ? item.content
      : item.summary || "";

  return (
    <li className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100/70 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-4 sm:p-5">
      <div className={`flex flex-col ${layoutClass} gap-4 md:gap-6`}>
        {/* Text side */}
        <div className={hasImages ? "md:w-1/2 space-y-3" : "w-full space-y-3"}>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5">
              <Calendar className="h-3 w-3" />
              {formatDate(item.event_date || item.created_at)}
            </span>
            {item.category && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 text-slate-700 px-2 py-0.5">
                <Tag className="h-3 w-3" />
                {item.category}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            {item.title}
          </h3>

          {/* Optional summary as intro line */}
          {item.summary && item.summary !== mainText && (
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
              {item.summary}
            </p>
          )}

          {/* Full content */}
          {mainText && (
            <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
              {mainText}
            </p>
          )}
        </div>

        {/* Image side (carousel) */}
        {hasImages && (
          <div className="md:w-1/2 relative">
            <div
              className="group relative h-52 sm:h-64 md:h-full w-full overflow-hidden rounded-2xl bg-slate-900/80 cursor-pointer"
              onClick={() =>
                onImageClick(imagesArray[activeIndex], imagesArray, activeIndex)
              }
            >
              <img
                src={imagesArray[activeIndex]}
                alt={`${item.title} - Image ${activeIndex + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Icon & image count */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[11px] text-white/90">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                  <ImageIcon className="h-3 w-3" />
                  {imagesArray.length > 1
                    ? `${activeIndex + 1} / ${imagesArray.length}`
                    : "Image"}
                </span>
              </div>

              {/* Arrows (show only if multiple images) */}
              {imagesArray.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((prev) =>
                        prev === 0 ? imagesArray.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur-sm p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((prev) =>
                        prev === imagesArray.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur-sm p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default function NewsMainSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // for image modal

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
    const setYears = new Set();
    news.forEach((n) => {
      if (n.event_date) {
        const y = new Date(n.event_date).getFullYear();
        if (!Number.isNaN(y)) setYears.add(y);
      }
    });
    return Array.from(setYears).sort((a, b) => b - a);
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

  const openImageModal = (imageUrl, allImages = [], currentIndex = 0) => {
    setSelectedImage({
      url: imageUrl,
      title: "",
      allImages,
      currentIndex,
    });
  };

  const yearGroups = useMemo(() => {
    const groups = {};

    years.forEach((year) => {
      const decade = Math.floor(year / 10) * 10;
      if (!groups[decade]) groups[decade] = [];
      groups[decade].push(year);
    });

    return Object.entries(groups)
      .sort((a, b) => b[0] - a[0]) // latest decade first
      .map(([decade, yrs]) => ({
        decade,
        years: yrs.sort((a, b) => b - a),
      }));
  }, [years]);

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage || !selectedImage.allImages) return;

    const { allImages, currentIndex } = selectedImage;
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    } else {
      newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage({
      ...selectedImage,
      url: allImages[newIndex],
      currentIndex: newIndex,
    });
  };

  // keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      switch (event.key) {
        case "Escape":
          closeImageModal();
          break;
        case "ArrowLeft":
          if (selectedImage.allImages && selectedImage.allImages.length > 1) {
            navigateImage("prev");
          }
          break;
        case "ArrowRight":
          if (selectedImage.allImages && selectedImage.allImages.length > 1) {
            navigateImage("next");
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Controls row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Year filter pills */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="text-slate-500">Filter by year:</span>

            {/* Dropdown */}
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm
             focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="all">All years</option>

              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* Quick recent years */}
            <div className="hidden sm:flex items-center gap-2 ml-2">
              {years.slice(0, 3).map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setYearFilter(year)}
                  className={`rounded-full px-3 py-1 border transition
          ${
            String(yearFilter) === String(year)
              ? "bg-primary text-white border-primary shadow-sm"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
          }`}
                >
                  {year}
                </button>
              ))}
            </div>
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
                className="w-full pl-7 pr-2 py-1.5 border border-slate-200 rounded-full text-xs sm:text-sm bg-white/90 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </form>
        </div>

        {/* Content */}
        <div className="rounded-3xl bg-white/90 border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-4 sm:p-6">
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
            <ul className="space-y-5 sm:space-y-6">
              {filteredNews.map((item, index) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  index={index}
                  onImageClick={(imageUrl, allImages, idx) =>
                    setSelectedImage({
                      url: imageUrl,
                      title: item.title,
                      allImages,
                      currentIndex: idx,
                    })
                  }
                />
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
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
                    navigateImage("prev");
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">
                  {selectedImage.title || "News image"}
                </p>
                {selectedImage.allImages &&
                  selectedImage.allImages.length > 1 && (
                    <p className="text-xs text-gray-300">
                      {selectedImage.currentIndex + 1} of{" "}
                      {selectedImage.allImages.length}
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
