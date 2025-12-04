// src/components/layout/HeaderTop.jsx
import React, { useState } from "react";
import JPLogo from "../../assets/logos/logo.png";
import RassiLogo from "../../assets/logos/rassi.png";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services/crash-investigations",
    children: [
      { label: "Crash Investigations", href: "/services/crash-investigations" },
      { label: "Data Analytics", href: "/services/data-analytics" },
      {
        label: "Road Safety Engineering",
        href: "/services/road-safety-engineering",
      },
      { label: "Training", href: "/services/training" },
    ],
  },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Employee Login", href: "/employee-login" },
];

export default function HeaderTop() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const isItemActive = (item) => {
    if (item.label === "Services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname === item.href;
  };

  const goTo = (href) => {
    navigate(href);
    setMobileOpen(false);
    setDesktopServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/60 bg-secondary text-white shadow-md">
      {/* Wrapper to draw the red stripes behind everything */}
      <div className="relative h-16 md:h-20">
        {/* LEFT red wedge with visible diagonal gradient */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-64"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
            background:
              "linear-gradient(135deg, #b91c1c 0%, rgba(185,28,28,0.3) 40%, rgba(0,0,0,0) 75%)",
          }}
        />

        {/* RIGHT red wedge with visible diagonal gradient */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-80"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
            background:
              "linear-gradient(-135deg, #b91c1c 0%, rgba(185,28,28,0.3) 40%, rgba(0,0,0,0) 75%)",
          }}
        />

        {/* Actual header content sits above stripes */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center gap-6 px-4 sm:px-6">
          {/* LEFT: JP Logo (no own background so wedge shows) */}
          <button
            onClick={() => goTo("/")}
            className="relative z-10 flex h-full items-center gap-3 px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={JPLogo}
              alt="JP Research"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </button>

{/* CENTER: Desktop navigation */}
<div className="relative z-10 hidden flex-1 items-center justify-center lg:flex">
  <nav className="flex items-center gap-6" aria-label="Main navigation">
    {menuItems.map((item) => {
      const active = isItemActive(item);
      const hasChildren = !!item.children?.length;

      if (!hasChildren) {
        return (
          <button
            key={item.label}
            onClick={() => goTo(item.href)}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative px-2 py-1.5 text-[13px] tracking-wide transition-all duration-200
              cursor-pointer bg-transparent
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
              ${
                active
                  ? "text-white"
                  : "text-slate-100 hover:text-primary"
              }`}
          >
            {item.label}

            {/* Active underline */}
            {active && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary" />
            )}
          </button>
        );
      }

      // SERVICES DROPDOWN (desktop)
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setDesktopServicesOpen(true)}
          onMouseLeave={() => setDesktopServicesOpen(false)}
        >
          <button
            onClick={() => setDesktopServicesOpen((prev) => !prev)}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative flex items-center gap-1 px-2 py-1.5 text-[14px] tracking-wide cursor-pointer transition-all duration-200
              bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
              ${
                active
                  ? "text-primary"
                  : "text-slate-100 hover:text-primary"
              }`}
            aria-haspopup="true"
            aria-expanded={desktopServicesOpen}
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                desktopServicesOpen ? "rotate-180 text-primary" : ""
              }`}
            />

            {/* Active underline */}
            {active && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary" />
            )}
          </button>

          {/* Dropdown (unchanged) */}
          <div
            className={`absolute left-0 top-full z-50 min-w-[220px] max-w-xs origin-top-left rounded-xl border border-slate-700 bg-slate-900/95 px-2 py-2 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-200
              ${
                desktopServicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
          >
            <div className="flex flex-col gap-1">
              {item.children.map((child) => {
                const childActive = location.pathname === child.href;
                return (
                  <button
                    key={child.label}
                    onClick={() => goTo(child.href)}
                    className={`group flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-[14px] font-medium transition-all duration-200
                      ${
                        childActive
                          ? "text-primary"
                          : "text-slate-100 hover:text-primary hover:bg-slate-800"
                      }`}
                  >
                    {child.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    })}
  </nav>
</div>


          {/* RIGHT: Rassi logo over right wedge + Mobile menu toggle */}
          <div className="relative z-10 ml-auto flex items-center gap-3">
            <a
              href="https://www.rassi.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1"
            >
              <img
                src={RassiLogo}
                alt="RASSI"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-800 shadow-sm transition-all duration-200 hover:border-primary/60 hover:bg-slate-700 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="relative flex h-5 w-5 flex-col items-center justify-center">
                <span
                  className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    mobileOpen
                      ? "rotate-45 translate-y-[1px]"
                      : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-80"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    mobileOpen
                      ? "-rotate-45 -translate-y-[1px]"
                      : "translate-y-1"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY (unchanged) */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-30 bg-black/60 animate-in fade-in duration-300"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-4 top-16 md:top-20 z-40 rounded-2xl border border-slate-700 bg-slate-900/98 p-6 shadow-2xl animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {menuItems.map((item) => {
                const active = isItemActive(item);
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => goTo(item.href)}
                      className={`w-full rounded-xl px-4 py-2 text-left text-[15px] font-semibold transition-all duration-200
                        ${
                          active
                            ? "bg-primary text-white"
                            : "text-slate-100 hover:bg-slate-800"
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <div key={item.label} className="w-full">
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold transition-all duration-200
                        ${
                          active
                            ? "bg-primary text-white"
                            : "text-slate-100 hover:bg-slate-800"
                        }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 ml-3 flex flex-col gap-1.5 border-l-2 border-primary/40 pl-4">
                        {item.children.map((child) => {
                          const childActive = location.pathname === child.href;
                          return (
                            <button
                              key={child.label}
                              onClick={() => goTo(child.href)}
                              className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all duration-200
                                ${
                                  childActive
                                    ? "bg-primary/30 text-white"
                                    : "text-slate-100 hover:bg-slate-800"
                                }`}
                            >
                              {child.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
