  // src/pages/dashboard/AdminPublications.jsx
  import { useEffect, useState } from "react";
  import { Filter, Plus, ArrowLeft } from "lucide-react";
  import publicationAdminService from "../../services/admin/publicationAdminService";
  import PublicationForm from "../../components/dashboard/publications/PublicationForm";
  import PublicationList from "../../components/dashboard/publications/PublicationList";

  const emptyForm = {
    id: null,
    type: "Technical Paper",
    title: "",
    highlight: "",
    pub_date: "",
    authors: "",
    abstract: "",
    pdf: null,          // ✅ file
    existing_pdf_path: null, // ✅ existing PDF URL
    is_published: 1,
  };

  const AdminPublications = () => {
    const [publications, setPublications] = useState([]);
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 10,
      total: 0,
    });
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("pub_date");
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

    const loadPublications = async (page = 1, isSearch = false) => {
      try {
        if (isSearch) {
          setSearchLoading(true);
        } else {
          setLoading(true);
        }

        const res = await publicationAdminService.list({
          search,
          sort,
          order,
          page,
          limit: pagination.limit,
        });

        setPublications(res.data || []);
        setPagination(res.pagination || { page: 1, limit: 10, total: 0 });
      } catch (err) {
        console.error(err);
        alert("Failed to load publications");
      } finally {
        if (isSearch) {
          setSearchLoading(false);
        } else {
          setLoading(false);
        }
      }
    };

    // initial + sort/order change
    useEffect(() => {
      loadPublications(1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, order]);

    // debounced search
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (search !== undefined) {
          loadPublications(1, true);
        }
      }, 300);

      return () => clearTimeout(timeoutId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleSearchChange = (value) => {
      setSearch(value);
    };

    const handleSearchSubmit = (searchTerm = null) => {
      if (typeof searchTerm === "string") {
        loadPublications(1);
      } else if (searchTerm?.preventDefault) {
        searchTerm.preventDefault();
        loadPublications(1);
      } else {
        loadPublications(1);
      }
    };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      console.log("File selected:", files?.[0]?.name, files?.[0]?.size);
    }

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "file"
          ? files?.[0] || null
          : name === "is_published"
          ? Number(value)
          : value,
    }));
  };


    const handleAddNew = () => {
      setEditingId(null);
      setForm(emptyForm);
      setViewMode("form");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleEdit = (item) => {
      setEditingId(item.id);

      let formattedDate = "";
      if (item.pub_date) {
        const date = new Date(item.pub_date);
        if (!Number.isNaN(date.getTime())) {
          formattedDate = date.toISOString().split("T")[0];
        }
      }

    setForm({
    id: item.id,
    type: item.type || "Technical Paper",
    title: item.title || "",
    highlight: item.highlight || "",
    pub_date: formattedDate,
    authors: item.authors || "",
    abstract: item.abstract || "",
    pdf: null, // ✅ always reset
    existing_pdf_path: item.pdf_path || null, // ✅ existing PDF
    is_published:
      typeof item.is_published === "number"
        ? item.is_published
        : item.is_published
        ? 1
        : 0,
  });

      setViewMode("form");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleResetForm = () => {
      setEditingId(null);
      setForm(emptyForm);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const formData = new FormData();

      formData.append("type", form.type);
      formData.append("title", form.title);
      formData.append("highlight", form.highlight);
      formData.append("pub_date", form.pub_date || "");
      formData.append("authors", form.authors);
      formData.append("abstract", form.abstract);
      formData.append("is_published", Number(form.is_published ? 1 : 0));

      if (form.pdf) {
        console.log("Adding PDF to FormData:", form.pdf.name, form.pdf.size);
        formData.append("pdf", form.pdf); // ✅ file
      } else {
        console.log("No PDF file to upload");
      }

      if (editingId) {
        await publicationAdminService.update(editingId, formData);
        alert("Publication updated successfully!");
      } else {
        await publicationAdminService.create(formData);
        alert("Publication created successfully!");
      }

      await loadPublications(pagination.page);
      setViewMode("list");
      handleResetForm();
    } catch (err) {
      console.error("Error saving publication:", err);
      alert(
        `Failed to save publication: ${
          err.response?.data?.error || err.message
        }`
      );
    } finally {
      setSaving(false);
    }
  };


    const handleDelete = async (id) => {
      if (!window.confirm("Delete this publication?")) return;
      try {
        await publicationAdminService.remove(id);
        await loadPublications(pagination.page);
      } catch (err) {
        console.error(err);
        alert("Failed to delete publication");
      }
    };

    const handlePageChange = (newPage) => {
      loadPublications(newPage);
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
              Publications Manager
            </div>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">
              {viewMode === "list"
                ? "Publications"
                : editingId
                ? "Edit publication"
                : "Add publication"}
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              {viewMode === "list"
                ? "Filter, search and manage all publications shown on the website."
                : "Fill in the publication details and save to publish or update."}
            </p>
          </div>

          {/* Right header controls */}
          <div className="flex flex-col items-end gap-2 text-xs">
            {viewMode === "list" && (
              <>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm mb-1">
                  <Filter className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-slate-500">Sort by</span>
                  <select
                    className="border-none bg-transparent text-slate-800 focus:outline-none cursor-pointer"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="pub_date">Publication date</option>
                    <option value="created_at">Created at</option>
                    <option value="title">Title</option>
                    <option value="type">Type</option>
                  </select>
                  <button
                    type="button"
                    onClick={() =>
                      setOrder((o) => (o === "asc" ? "desc" : "asc"))
                    }
                    className="ml-1 rounded-full bg-slate-900 text-white px-2 py-0.5 text-[10px]"
                  >
                    {order === "asc" ? "Oldest → Newest" : "Newest → Oldest"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddNew}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[14px] cursor-pointer font-semibold text-white shadow-md hover:brightness-110"
                >
                  <Plus className="h-4 w-6" />
                  Add publication
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
          <PublicationList
            publications={publications}
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
            <PublicationForm
              form={form}
              editingId={editingId}
              saving={saving}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={handleResetForm}
            />
          </div>
        )}
      </div>
    );
  };

  export default AdminPublications;
