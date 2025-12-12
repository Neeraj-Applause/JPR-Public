import { useEffect, useState } from "react";
import { Filter, Plus, ArrowLeft } from "lucide-react";
import newsService from "../../services/newsService";
import NewsForm from "../../components/dashboard/news/NewsForm";
import NewsList from "../../components/dashboard/news/NewsList";

const emptyForm = {
  id: null,
  title: "",
  summary: "",
  content: "",
  category: "",
  event_date: "",
  imagesText: "",
};

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("event_date");
  const [order, setOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // "list" | "form"
  const [viewMode, setViewMode] = useState("list");

  const totalPages = Math.ceil(
    (pagination.total || 0) / (pagination.limit || 10)
  );

  const [files, setFiles] = useState([]);
const [previews, setPreviews] = useState([]);

  const loadNews = async (page = 1, isSearch = false) => {
    try {
      // For search, use a separate loading state with delay
      if (isSearch) {
        setSearchLoading(true);
      } else {
        setLoading(true);
      }
      
      const res = await newsService.list({
        search,
        sort,
        order,
        page,
        limit: pagination.limit,
      });
      setNews(res.data || []);
      setPagination(res.pagination || { page: 1, limit: 10, total: 0 });
    } catch (err) {
      console.error(err);
      alert("Failed to load news");
    } finally {
      if (isSearch) {
        setSearchLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadNews(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, order]);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search !== undefined) {
        loadNews(1, true); // Pass true to indicate this is a search
      }
    }, 300); // Reduced debounce time for better UX

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearchSubmit = (searchTerm = null) => {
    // If called with a string (from debounced search), use it
    // If called with an event (from form submit), prevent default and use current search
    if (typeof searchTerm === 'string') {
      loadNews(1);
    } else if (searchTerm?.preventDefault) {
      searchTerm.preventDefault();
      loadNews(1);
    } else {
      loadNews(1);
    }
  };

const handleImageChange = (e) => {
  const selectedFiles = Array.from(e.target.files);
  console.log("Selected files:", selectedFiles.length);
  setFiles(selectedFiles);
  setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
};

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setViewMode("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    
    // Format date for input field (YYYY-MM-DD)
    let formattedDate = "";
    if (item.event_date) {
      const date = new Date(item.event_date);
      if (!isNaN(date.getTime())) {
        formattedDate = date.toISOString().split('T')[0];
      }
    }
    
    setForm({
      id: item.id,
      title: item.title || "",
      summary: item.summary || "",
      content: item.content || "",
      category: item.category || "",
      event_date: formattedDate,
      imagesText: Array.isArray(item.images) ? item.images.join("\n") : "",
    });
    setViewMode("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFiles([]);
    setPreviews([]);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setSaving(true);

  const formData = new FormData();
  
  // Add form fields to FormData
  formData.append('title', form.title);
  formData.append('summary', form.summary);
  formData.append('content', form.content);
  formData.append('category', form.category);
  formData.append('event_date', form.event_date);

  // Add image files
  files.forEach((file) => {
    formData.append("images", file);
  });

  try {
    if (editingId) {
      await newsService.updateMultipart(editingId, formData);
      alert("News updated successfully!");
    } else {
      await newsService.createMultipart(formData);
      alert("News created successfully!");
    }

    await loadNews(pagination.page);
    setViewMode("list");
    handleResetForm();
  } catch (err) {
    console.error("Error saving news:", err);
    alert(`Failed to save news: ${err.response?.data?.error || err.message}`);
  } finally {
    setSaving(false);
  }
};

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this news item?")) return;
    try {
      await newsService.remove(id);
      await loadNews(pagination.page);
    } catch (err) {
      console.error(err);
      alert("Failed to delete news");
    }
  };

  const handlePageChange = (newPage) => {
    loadNews(newPage);
  };

  const goBackToList = () => {
    setViewMode("list");
    handleResetForm();
  };

  return (
    <div className="w-full h-full px-6 py-6 space-y-4 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            News Manager
          </div>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">
            {viewMode === "list" ? "News & Events" : editingId ? "Edit news" : "Add news"}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {viewMode === "list"
              ? "Filter, search and manage all news shown on the website."
              : "Fill in the details below and save to publish or update this news item."}
          </p>
        </div>

        {/* Right header controls */}
        <div className="flex flex-col items-end gap-2 text-xs">
          {viewMode === "list" && (
            <>
              <button
                type="button"
                onClick={handleAddNew}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[14px] cursor-pointer font-semibold text-white shadow-md hover:brightness-110"
              >
                <Plus className="h-4 w-6" />
                Add news
              </button>
            </>
          )}

          {viewMode === "form" && (
            <button
              type="button"
              onClick={goBackToList}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] text-slate-600 hover:bg-slate-50"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to list
            </button>
          )}
        </div>
      </div>

      {/* Content area */}
      {viewMode === "list" ? (
        <NewsList
          news={news}
          loading={loading}
          searchLoading={searchLoading}
          pagination={pagination}
          totalPages={totalPages}
          search={search}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPageChange={handlePageChange}
        />
      ) : (
        <div className="max-w-4xl">
          <NewsForm
            form={form}
            editingId={editingId}
            saving={saving}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={handleResetForm}
            onImageChange={handleImageChange}
            previews={previews}
          />
        </div>
      )}
    </div>
  );
};

export default AdminNews;
