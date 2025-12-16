// src/pages/dashboard/AdminProjects.jsx
import { useEffect, useState } from "react";
import { Filter, Plus, ArrowLeft } from "lucide-react";
import projectAdminService  from "../../services/admin/projectAdminService";
import ProjectForm from "../../components/dashboard/projects/ProjectForm";
import ProjectList from "../../components/dashboard/projects/ProjectList";

const emptyForm = {
  id: null,
  period: "",
  project_title: "",
  client: "",
  location: "",
  summary: "",
  category: "",
  is_published: 1,
};

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("period");
  const [order, setOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  const totalPages = Math.ceil(
    (pagination.total || 0) / (pagination.limit || 10)
  );

  const loadProjects = async (page = 1, isSearch = false) => {
    try {
      isSearch ? setSearchLoading(true) : setLoading(true);

      const res = await projectAdminService .list({
        search,
        sort,
        order,
        page,
        limit: pagination.limit,
      });

      setProjects(res.data || []);
      setPagination(res.pagination || pagination);
    } catch (err) {
      console.error(err);
      alert("Failed to load projects");
    } finally {
      isSearch ? setSearchLoading(false) : setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects(1);
    // eslint-disable-next-line
  }, [sort, order]);

  useEffect(() => {
    const t = setTimeout(() => loadProjects(1, true), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({
      ...p,
      [name]: name === "is_published" ? Number(value) : value,
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
    setForm({
      ...item,
      is_published: Number(item.is_published),
    });
    setViewMode("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (editingId) {
        await projectAdminService .update(editingId, form);
        alert("Project updated successfully");
      } else {
        await projectAdminService .create(form);
        alert("Project created successfully");
      }

      await loadProjects(pagination.page);
      setViewMode("list");
      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save project");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await projectAdminService .remove(id);
    await loadProjects(pagination.page);
  };

  return (
    <div className="w-full h-full px-6 py-6 space-y-4 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase text-primary">
            Projects Manager
          </div>
          <h2 className="mt-2 text-2xl font-semibold">
            {viewMode === "list"
              ? "Projects"
              : editingId
              ? "Edit project"
              : "Add project"}
          </h2>
        </div>

        {viewMode === "list" ? (
          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-white font-semibold shadow"
          >
            <Plus className="h-4 w-4" />
            Add project
          </button>
        ) : (
          <button
            onClick={() => setViewMode("list")}
            className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        )}
      </div>

      {viewMode === "list" ? (
        <ProjectList
          projects={projects}
          loading={loading}
          searchLoading={searchLoading}
          pagination={pagination}
          totalPages={totalPages}
          search={search}
          onSearchChange={setSearch}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPageChange={(p) => loadProjects(p)}
        />
      ) : (
        <ProjectForm
          form={form}
          editingId={editingId}
          saving={saving}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={() => setForm(emptyForm)}
        />
      )}
    </div>
  );
};

export default AdminProjects;
