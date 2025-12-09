import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Newspaper,
  BookOpen,
  BarChart3,
  Briefcase,
  Mail,
} from "lucide-react";

import Logo from "../../../assets/logos/logo.png"; // adjust path if needed


const Sidebar = ({ isCollapsed }) => {

  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
     ${
       isActive
         ? "bg-gradient-to-r from-primary to-red-700 text-white shadow-lg shadow-red-900/30"
         : "text-slate-300 hover:bg-white/10 hover:text-white"
     }`;

  const iconClass = (isActive, color) =>
    `h-5 w-5 transition-all flex-shrink-0 ${
      isActive
        ? `text-white drop-shadow-[0_0_6px_${color}]`
        : `text-[${color}] group-hover:text-white`
    }`;

  return (
    <div className="h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col shadow-2xl shadow-black/40 transition-all duration-300">
     <div className="px-4 py-5 border-b border-white/10 border-r border-white/10 flex items-center gap-3">
  {/* LOGO */}
  <div className="flex items-center justify-center">
    <img
      src={Logo}
      alt="JP Research"
      className={`transition-all duration-300 object-contain
        ${isCollapsed ? "h-8 w-8" : "h-20 w-20"}`}
    />
  </div>

  {/* TEXT */}
  <div
    className={`overflow-hidden transition-all duration-300
      ${isCollapsed ? "w-0 opacity-0" : "w-full opacity-100"}`}
  >
    <h2 className="text-lg font-semibold tracking-wide leading-tight">
      JP Research
    </h2>
    <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-0.5">
      Admin Panel
    </p>
  </div>
</div>


      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto overflow-x-hidden border-r border-white/10">
        <NavLink end to="/admin" className={navLinkClass} title="Dashboard">
          {({ isActive }) => (
            <>
              <LayoutDashboard
                className={iconClass(isActive, "#22c55e")}
              />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Dashboard
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/news" className={navLinkClass} title="News & Events">
          {({ isActive }) => (
            <>
              <Newspaper className={iconClass(isActive, "#38bdf8")} />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                News & Events
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/publications" className={navLinkClass} title="Publications">
          {({ isActive }) => (
            <>
              <BookOpen className={iconClass(isActive, "#a78bfa")} />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Publications
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/projects" className={navLinkClass} title="Projects">
          {({ isActive }) => (
            <>
              <BarChart3 className={iconClass(isActive, "#f59e0b")} />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Projects
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/careers" className={navLinkClass} title="Careers">
          {({ isActive }) => (
            <>
              <Briefcase className={iconClass(isActive, "#ec4899")} />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Careers
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/contact-messages" className={navLinkClass} title="Contact Messages">
          {({ isActive }) => (
            <>
              <Mail className={iconClass(isActive, "#06b6d4")} />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                Contact Messages
              </span>
            </>
          )}
        </NavLink>
      </nav>

      {/* FOOTER */}
      <div className={`px-6 py-4 border-t border-r border-white/10 text-xs text-slate-400 transition-opacity duration-300 ${isCollapsed ? "opacity-0" : "opacity-100"}`}>
        {!isCollapsed && (
          <>
            <p className="leading-tight">© {new Date().getFullYear()} JP Research</p>
            <p className="opacity-70">Secure Admin System</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
