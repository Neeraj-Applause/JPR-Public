import { useNavigate } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";
import authService from "../../../services/authService";

const HeaderTop = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/admin/login");
  };

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center justify-between w-full h-full px-6 bg-white/80 backdrop-blur border-b border-slate-200/70">
      {/* LEFT: title + subtle badge */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-slate-800">
              Admin Dashboard
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              <ShieldCheck className="h-3 w-3" />
              Secure
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: user + logout */}
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            {/* avatar */}
            <div className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold shadow-md">
              {initials || "AD"}
            </div>

            {/* name + role */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-medium text-slate-800">
                {user.name}
              </span>
              <span className="text-[11px] text-slate-500 capitalize">
                {user.role || "admin"}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white text-xs font-medium px-3 py-1.5 shadow-md hover:bg-slate-800 active:scale-[0.97] transition"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Logout</span>
          <span className="sm:hidden">Exit</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
