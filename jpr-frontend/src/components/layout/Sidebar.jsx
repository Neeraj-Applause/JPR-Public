// src/components/layout/Sidebar.jsx
import { useState } from "react";
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
} from "lucide-react";

const menuItems = [
  { icon: FiHome, label: "Home", href: "/" },
  { icon: FiInfo, label: "About", href: "/about" },
  { icon: Briefcase, label: "Services", href: "/services" },
  { icon: BookOpenCheck, label: "Publications", href: "/publications" },
  { icon: FiCalendar, label: "News", href: "/news" },
  { icon: FolderOpenDot, label: "Projects", href: "/projects" },
  { icon: PhoneCall, label: "Contact", href: "/contact" },
  { icon: FiLogOut, label: "Login", href: "/login" },
];

// Shared button for both collapsed & expanded variants
function MenuButton({ item, isActive, variant, onClick }) {
  const Icon = item.icon;

  if (variant === "icon") {
    // COLLAPSED – only icon
    return (
      <button
        onClick={onClick}
        className={`
          relative flex items-center justify-center
          h-12 text-2xl
          transition-all duration-200
          ${
            isActive
              ? "bg-primary text-white w-16 rounded-r-full rounded-l-md shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
              : "w-12 text-primary rounded-xl hover:bg-primary hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
          }
        `}
      >
        {isActive && (
          <span
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              h-7 w-1.5 bg-secondary rounded-r-full
            "
          />
        )}
        <Icon className="relative z-10" />
      </button>
    );
  }

  // EXPANDED – icon + label, but same height & vertical rhythm
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full flex items-center gap-3
        h-12 px-4 text-sm font-medium
        rounded-r-2xl rounded-l-md
        transition-all duration-200
        ${
          isActive
            ? "bg-primary text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
            : "text-primary hover:bg-primary/5"
        }
      `}
    >
      {isActive && (
        <span
          className="
            absolute left-0 top-0 bottom-0
            w-1.5 bg-secondary rounded-r-full
          "
        />
      )}

      <Icon className="text-lg relative z-10" />
      <span className="whitespace-nowrap relative z-10">
        {item.label}
      </span>
    </button>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setActive(item.label);
    setIsOpen(false); // collapse expanded panel on click
    // TODO: hook up react-router navigation here (navigate(item.href))
  };

  return (
    <>
      {/* SLIM RAIL (always visible) */}
      <aside
        className="
          fixed inset-y-0 left-0
          w-20 bg-white text-secondary
          flex flex-col items-center
          shadow-[8px_0_30px_rgba(0,0,0,0.10)]
          z-40
        "
        onMouseEnter={() => setIsOpen(true)}
      >
        {/* Logo */}
        <div className="pt-8 pb-4">
          <img src="/logo.png" alt="JPR" className="w-12" />
        </div>

        {/* Menu – same vertical rhythm as expanded */}
        <div className="flex-1 flex flex-col items-center gap-5 pb-10">
          {menuItems.map((item) => (
            <MenuButton
              key={item.label}
              item={item}
              variant="icon"
              isActive={active === item.label}
              onClick={() => handleSelect(item)}
            />
          ))}
        </div>
      </aside>

      {/* ARROW TOGGLE – centered, half in / half out */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          fixed top-1/2 left-20
          -translate-x-1/2 -translate-y-1/2
          w-10 h-10 rounded-full bg-primary text-white
          flex items-center justify-center
          shadow-md z-50
          transition-transform duration-300 ease-out
        "
      >
        {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </button>

      {/* EXPANDING PANEL */}
      <div
        className={`
          fixed inset-y-0 left-0
          w-72 bg-white shadow-[8px_0_30px_rgba(0,0,0,0.15)]
          z-50
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col h-full">
          {/* Logo aligned with rail logo */}
          <div className="px-6 pt-8 pb-4">
            <img src="/logo.png" alt="JPR" className="w-24" />
          </div>

          {/* Menu – same item height & gap as rail */}
          <nav className="flex-1 flex flex-col gap-5 px-4 pb-10">
            {menuItems.map((item) => (
              <MenuButton
                key={item.label}
                item={item}
                variant="full"
                isActive={active === item.label}
                onClick={() => handleSelect(item)}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
