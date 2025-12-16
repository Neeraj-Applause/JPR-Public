import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import adminContactService from "../../services/admin/adminContactService";
import ContactList from "../../components/dashboard/contact/ContactList";
import ContactView from "../../components/dashboard/contact/ContactView";

const AdminContact = () => {
  const [messages, setMessages] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // list | view

  const totalPages = Math.ceil(
    (pagination.total || 0) / (pagination.limit || 10)
  );

  const loadMessages = async (page = 1, isSearch = false) => {
    try {
      isSearch ? setSearchLoading(true) : setLoading(true);

      const res = await adminContactService.list({
        search,
        page,
        limit: pagination.limit,
      });

      setMessages(res.data || []);
      setPagination(res.pagination);
    } catch (err) {
      console.error(err);
      alert("Failed to load contact messages");
    } finally {
      isSearch ? setSearchLoading(false) : setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages(1);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const t = setTimeout(() => loadMessages(1, true), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await adminContactService.remove(id);
    await loadMessages(pagination.page);
  };

  return (
    <div className="w-full h-full px-6 py-6 space-y-4 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase text-primary">
            Contact Manager
          </div>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">
            {viewMode === "list" ? "Contact Messages" : "View message"}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Messages submitted via website contact form.
          </p>
        </div>

        {viewMode === "view" && (
          <button
            onClick={() => setViewMode("list")}
            className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs bg-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        )}
      </div>

      {/* Content */}
      {viewMode === "list" ? (
        <ContactList
          messages={messages}
          loading={loading}
          searchLoading={searchLoading}
          pagination={pagination}
          totalPages={totalPages}
          search={search}
          onSearchChange={setSearch}
          onView={(item) => {
            setSelected(item);
            setViewMode("view");
          }}
          onDelete={handleDelete}
          onPageChange={(p) => loadMessages(p)}
        />
      ) : (
        <ContactView message={selected} />
      )}
    </div>
  );
};

export default AdminContact;
