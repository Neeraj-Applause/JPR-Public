import { useState } from "react";
import {
  FiHome,
  FiInfo,
  FiGift,
  FiCalendar,
  FiLogOut,
  FiLink,
} from "react-icons/fi";

const menuItems = [
  { icon: FiHome, label: "Home", href: "/" },
  { icon: FiInfo, label: "About", href: "/about" },
  { icon: FiGift, label: "Services", href: "/services" },
  { icon: FiCalendar, label: "News", href: "/news" },
  { icon: FiLink, label: "Projects", href: "/projects" },
  { icon: FiLogOut, label: "Login", href: "/login" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <aside
      className="
        fixed inset-y-0 left-0
        w-20 bg-white text-secondary
        flex flex-col items-center py-10 gap-9
        shadow-[8px_0_30px_rgba(0,0,0,0.10)]
        z-50
      "
    >
      <img src="/logo.png" alt="JPR" className="w-12 mb-6" />

      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.label;

        return (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`
              flex items-center justify-center text-2xl transition
              ${
                isActive
                  ? "bg-primary text-white w-16 h-12 rounded-r-full rounded-l-md shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
                  : "w-12 h-12 text-primary rounded-xl hover:bg-primary hover:text-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
              }
            `}
          >
            <Icon />
          </button>
        );
      })}
    </aside>
  );
}
