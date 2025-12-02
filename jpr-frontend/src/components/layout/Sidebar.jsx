// src/components/layout/Sidebar.jsx
import { useState, useRef, useEffect } from "react";
import {
  FiHome,
  FiInfo,
  FiCalendar,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  BookOpenCheck,
  Briefcase,
  FolderOpenDot,
  PhoneCall,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

const menuItems = [
  { icon: FiHome, label: "Home", href: "/" },
  { icon: FiInfo, label: "About", href: "/about" },
  {
    icon: Briefcase,
    label: "Services",
    href: "/services/crash-investigations",
    children: [
      {
        label: "Crash Investigations",
        href: "/services/crash-investigations",
      },
      {
        label: "Data Analytics",
        href: "/services/data-analytics",
      },
      {
        label: "Road Safety Engineering",
        href: "/services/road-safety-engineering",
      },
      {
        label: "Training",
        href: "/services/training",
      },
    ],
  },
  { icon: BookOpenCheck, label: "Publications", href: "/publications" },
  { icon: FiCalendar, label: "News", href: "/news" },
  { icon: FolderOpenDot, label: "Projects", href: "/projects" },
  { icon: PhoneCall, label: "Contact", href: "/contact" },
  { icon: FiLogOut, label: "Login", href: "/login" },
];

// Shared button for both collapsed & expanded variants
function MenuButton({
  item,
  isActive,
  variant,
  onClick,
  hasChildren,
  expanded,
}) {
  const Icon = item.icon;

// icon-variant MenuButton — replace your current icon block with this
if (variant === "icon") {
  const btnRef = useRef(null);
  const [showTip, setShowTip] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  // recompute position based on the button's bounding rect (viewport coords)
  const computePos = () => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    // Use rect values directly because the tooltip is position: fixed (viewport coords)
    const top = rect.top + rect.height / 2; // center vertically on the button
    const left = rect.right + 12; // 12px gap to the right
    setPos({ top, left });
  };

  useEffect(() => {
    if (!showTip) return;

    // compute immediately when tooltip opens
    computePos();

    // update while visible — keeps tooltip in the right place during scroll/resize/shift
    const onScroll = () => computePos();
    const onResize = () => computePos();
    const onMove = () => computePos();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [showTip]);

  return (
    <>
      <div className="relative">
        <button
          ref={btnRef}
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          onFocus={() => setShowTip(true)}
          onBlur={() => setShowTip(false)}
          onClick={onClick}
          className={`relative flex items-center justify-center h-10 text-2xl
            transition-all duration-200
            ${
              isActive
                ? "bg-primary text-white w-16 rounded-r-full rounded-l-md shadow"
                : "w-12 text-primary rounded-xl hover:bg-primary hover:text-white hover:shadow"
            }
          `}
        >
          <Icon className="relative z-10 w-5 h-5" />
        </button>
      </div>

      {showTip &&
        createPortal(
          <div
            role="tooltip"
            aria-hidden={!showTip}
            className="fixed bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-md shadow-lg pointer-events-none"
            style={{
              top: pos.top,               // viewport Y
              left: pos.left,             // viewport X
              transform: "translateY(-50%)",
              whiteSpace: "nowrap",
              zIndex: 99999,              // above rail (1100), arrow (1150), panel (1120)
            }}
          >
            {item.label}
          </div>,
          document.body
        )}
    </>
  );
}


  // EXPANDED – icon + label (+ optional dropdown chevron)
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full flex items-center justify-between
        h-10 px-4 text-sm font-medium
        rounded-r-2xl rounded-l-md
        transition-all duration-200
        ${
          isActive
            ? "bg-primary text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
            : "text-primary hover:bg-primary/5"
        }
      `}
    >
      <div className="flex items-center gap-3">
        {isActive && (
          <span
            className="
              absolute left-0 top-0 bottom-0
              w-1 bg-secondary rounded-r-full
            "
          />
        )}

        <Icon className="w-5 h-5 relative z-10" />
        <span className="whitespace-nowrap relative z-10">
          {item.label}
        </span>
      </div>

      {hasChildren && (
        <ChevronDown
          className={`h-4 w-4 mr-1 transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      )}
    </button>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false); // desktop expand panel
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const [openSection, setOpenSection] = useState(null); // which parent menu is expanded (Services)

  const handleSelect = (item) => {
    navigate(item.href);
    setMobileOpen(false); // close mobile drawer on navigation
  };

  const toggleSection = (label) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  const isItemActive = (item) => {
    if (item.label === "Services") {
      // treat any /services route as active
      return location.pathname.startsWith("/services");
    }
    return location.pathname === item.href;
  };

  return (
    <>
      {/* 🌐 MOBILE HEADER (top bar) */}
      <header
        className="
          fixed top-0 left-0 right-0 h-16 bg-white
          flex items-center justify-between
          px-4 shadow-md z-50
          md:hidden
        "
      >
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="JPR" className="w-16" />
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-md"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* 📱 MOBILE SLIDE-OUT MENU */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* dark overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        {/* menu panel */}
        <div
          className={`
            absolute left-0 top-0 h-full w-64 bg-white
            shadow-[8px_0_30px_rgba(0,0,0,0.25)]
            pt-6 pb-8 flex flex-col
            transform transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="px-6 mb-6">
            <img src="/logo.png" alt="JPR" className="w-24" />
          </div>

          <nav className="flex-1 flex flex-col gap-2 px-4 overflow-y-auto">
            {menuItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const expanded = openSection === item.label;

              return (
                <div key={item.label}>
                  <MenuButton
                    item={item}
                    variant="full"
                    isActive={isItemActive(item)}
                    hasChildren={hasChildren}
                    expanded={expanded}
                    onClick={() =>
                      hasChildren
                        ? toggleSection(item.label)
                        : handleSelect(item)
                    }
                  />

                  {/* Mobile submenu for Services */}
                  {hasChildren && expanded && (
                    <div className="mt-1 ml-7 rounded-2xl bg-primary/5 py-2">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleSelect(child)}
                          className="w-full text-left px-4 py-1.5 text-xs font-medium text-slate-700 hover:text-primary hover:bg-white/70 rounded-xl"
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

      {/* 💻 DESKTOP SLIM RAIL (left) */}
      <aside
  className="
    fixed top-16 bottom-0 left-0
    w-20 bg-white text-secondary
    hidden md:flex flex-col items-center
    mt-8
    shadow-[8px_0_30px_rgba(0,0,0,0.10)]
    z-[1100]
  "
>


        {/* Menu with same spacing as expanded */}
        <div className="flex-1 flex flex-col items-center gap-5 pb-10">
          {menuItems.map((item) => (
            <MenuButton
              key={item.label}
              item={item}
              variant="icon"
              isActive={isItemActive(item)}
              onClick={() => handleSelect(item)} // rail just navigates
            />
          ))}
        </div>
      </aside>

      {/* ➡ DESKTOP ARROW TOGGLE */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          left: isOpen ? "18rem" : "5rem",
        }}
        className="
          hidden md:flex
          fixed top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-10 h-10 rounded-full bg-primary text-white
          items-center justify-center
          shadow-md z-[1150]
          transition-all duration-300 ease-out
        "
      >
        {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </button>

      {/* 🧾 DESKTOP EXPANDING PANEL */}
    <div
  className={`
    hidden md:block
    fixed top-20 bottom-0 left-0
    w-72 bg-white shadow-[8px_0_30px_rgba(0,0,0,0.15)]
    z-[1120]
    transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>

        <div className="flex flex-col h-full">

          {/* <div className="px-6 pt-8 pb-4">
            <img src="/logo.png" alt="JPR" className="w-24" />
          </div> */}

          {/* Menu – same item height & gap as rail */}
          <nav className="flex-1 flex flex-col gap-3 px-4 pb-10 mt-6">
            {menuItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const expanded = openSection === item.label;

              return (
                <div key={item.label}>
                  <MenuButton
                    item={item}
                    variant="full"
                    isActive={isItemActive(item)}
                    hasChildren={hasChildren}
                    expanded={expanded}
                    onClick={() =>
                      hasChildren
                        ? toggleSection(item.label)
                        : handleSelect(item)
                    }
                  />

                  {/* Desktop submenu for Services */}
                  {hasChildren && expanded && (
                    <div className="mt-1 rounded-2xl bg-primary/5 py-4">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleSelect(child)}
                          className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:text-primary hover:bg-white rounded-xl"
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
    </>
  );
}
