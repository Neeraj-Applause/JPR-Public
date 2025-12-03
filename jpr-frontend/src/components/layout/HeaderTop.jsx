// src/components/layout/HeaderTop.jsx
import React, { useState } from "react";
import JPLogo from "../../assets/logos/logo.png";
import RassiLogo from "../../assets/logos/rassi.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";

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
  { label: "Login", href: "/login" },
];

export default function HeaderTop() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false); // NEW

  const isItemActive = (item) => {
    if (item.label === "Services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname === item.href;
  };

  const goTo = (href) => {
    navigate(href);
    setMobileOpen(false);
    setDesktopServicesOpen(false); // close dropdown when navigating
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white md:bg-white/95 md:backdrop-blur-xl border-b border-slate-100/90 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 sm:px-6 h-16 md:h-20">
        {/* LEFT: JP Logo */}
        <button
          onClick={() => goTo("/")}
          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-all duration-300 hover:bg-slate-50/80 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          onMouseEnter={() => setHoveredItem("logo")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img
            src={JPLogo}
            alt="JP Research"
            className="h-10 md:h-20 w-auto object-contain transition-all duration-300"
          />
        </button>

        {/* CENTER: Desktop navigation */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <nav
            className="flex items-center gap-1"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => {
              const active = isItemActive(item);
              const hasChildren = !!item.children?.length;

              if (item.label === "Login") return null;

              if (!hasChildren) {
                return (
                  <button
                    key={item.label}
                    onClick={() => goTo(item.href)}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-4 py-2 text-[15px] font-semibold tracking-wide transition-all duration-300
                      hover:text-primary cursor-pointer rounded-lg
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                      ${
                        active
                          ? "text-primary bg-primary/5"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-1/2 -bottom-1 h-[3px] w-8 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </button>
                );
              }

              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setDesktopServicesOpen((prev) => !prev)
                    }
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`flex items-center gap-2 px-4 py-2 text-[15px] font-semibold tracking-wide cursor-pointer transition-all duration-300 rounded-lg
                      hover:text-primary
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                      ${
                        active
                          ? "text-primary bg-primary/5"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        desktopServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {active && (
                    <span className="absolute left-1/2 -bottom-1 h-[3px] w-8 -translate-x-1/2 rounded-full bg-primary" />
                  )}

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 origin-top rounded-xl border border-slate-100 bg-white/98 p-2 shadow-2xl shadow-slate-300/20 ring-1 ring-slate-100 backdrop-blur-xl transition-all duration-300
                      ${
                        desktopServicesOpen
                          ? "scale-100 opacity-100 pointer-events-auto"
                          : "scale-95 opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="flex flex-col gap-1 py-1">
                      {item.children.map((child) => {
                        const childActive = location.pathname === child.href;
                        return (
                          <button
                            key={child.label}
                            onClick={() => goTo(child.href)}
                            className={`w-full rounded-lg px-4 py-3 text-left text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:pl-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                              ${
                                childActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-slate-700"
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

        {/* RIGHT: Rassi logo + Login */}
        <div className="flex items-center gap-4 ml-auto">
          <img
            src={RassiLogo}
            alt="RASSI"
            className="h-8 md:h-12 w-auto object-contain transition-all duration-300 cursor-pointer"
          />

          {/* Mobile menu button (modern toggle) */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-slate-50 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative flex h-5 w-5 flex-col items-center justify-center">
              <span
                className={`block h-[2px] w-5 rounded-full bg-slate-900 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-slate-900 transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-80"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-slate-900 transition-all duration-300 ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[1px]"
                    : "translate-y-1"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {mobileOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-slate-900/40 animate-in fade-in duration-300"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sheet */}
          <div className="fixed inset-x-4 top-16 md:top-20 z-50 rounded-2xl border border-slate-100 bg-white/98 p-6 shadow-2xl animate-in slide-in-from-top-5 duration-300">
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {menuItems.map((item) => {
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => goTo(item.href)}
                      className="w-full rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold text-slate-8 00 transition-all duration-300 hover:bg-slate-50 hover:text-primary active:bg-slate-100"
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <div key={item.label} className="w-full">
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-50 hover:text-primary active:bg-slate-100"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 ml-3 flex flex-col gap-1.5 border-l-2 border-primary/20 pl-4">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => goTo(child.href)}
                            className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:pl-4 active:bg-primary/10"
                          >
                            {child.label}
                          </button>
                        ))}
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
