import {
  Newspaper,
  BookOpen,
  BarChart3,
  Briefcase,
  Mail,
  ArrowRight,
  Activity,
} from "lucide-react";

const AdminHome = () => {
  // Later you can replace these with real API data
  const stats = [
  {
    label: "News & Events",
    value: 12,
    change: "+3 this month",
    icon: Newspaper,
    accent: "from-primary/80 to-primary/60",
  },
  {
    label: "Publications",
    value: 28,
    change: "+1 new",
    icon: BookOpen,
    accent: "from-primary/80 to-primary/60",
  },
  {
    label: "Projects",
    value: 19,
    change: "2 in progress",
    icon: BarChart3,
    accent: "from-primary/80 to-primary/60",
  },
  {
    label: "Open Roles",
    value: 4,
    change: "Hiring now",
    icon: Briefcase,
    accent: "from-primary/80 to-primary/60",
  },
];


  const shortcuts = [
    { label: "Add News Article", href: "/admin/news" },
    { label: "Create Publication Entry", href: "/admin/publications" },
    { label: "Update Project List", href: "/admin/projects" },
    { label: "Post New Job Opening", href: "/admin/careers" },
  ];

  const recent = [
    {
      type: "News",
      title: "Coimbatore Police Training session added",
      time: "2 hours ago",
    },
    {
      type: "Publication",
      title: "Traffic Injury Prevention paper updated",
      time: "Yesterday",
    },
    {
      type: "Contact",
      title: "New enquiry via Contact page",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-full w-full px-6 py-6 space-y-6 bg-slate-50">
      {/* TOP ROW: title + subtitle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Overview
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Quick summary of recent activity across news, publications, projects
            and careers.
          </p>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon, accent }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div
                className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${accent} blur-xl`}
              />
            </div>
            <div className="relative p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-secondary">
                  {label}
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  {value}
                </p>
                <p className="mt-1 text-[11px] text-primary">{change}</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOWER GRID: recent + shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent activity */}
        <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-100 shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Recent activity
            </h3>
            <span className="text-[11px] text-slate-400">
              Last 7 days (sample data)
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {recent.map((item, idx) => (
              <div
                key={idx}
                className="py-2.5 flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 inline-flex items-center rounded-full bg-primary text-white text-[10px] px-2 py-0.5">
                    {item.type}
                  </span>
                  <div>
                    <p className="text-xs text-slate-800">{item.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {recent.length === 0 && (
              <p className="text-xs text-slate-400 py-4">
                No recent activity yet. Once you start adding content, you’ll see
                updates here.
              </p>
            )}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">
            Quick actions
          </h3>
          <div className="space-y-2">
            {shortcuts.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => (window.location.href = item.href)}
                className="w-full flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-100 text-xs text-primary px-3 py-3 transition-all"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-primary" />
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-slate-900 text-white px-3 py-3 text-[11px]">
            <p className="font-medium">Tip</p>
            <p className="mt-1 text-white/80">
              Use the sidebar to navigate between modules. Changes you make here
              update the public website instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
