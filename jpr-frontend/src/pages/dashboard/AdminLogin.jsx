import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import adminBg from "../../assets/dashboard/login-bg.jpg";
import Logo from "../../assets/logos/logo.png";

const AdminLogin = () => {

  const [email, setEmail] = useState("admin@jpresearch.in");
  const [password, setPassword] = useState("Admin@123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login(email, password);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.error || "Login failed. Please check credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${adminBg})` }}
    >
      {/* outer card */}
      <div className="w-full max-w-4xl rounded-3xl bg-white backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
        {/* left / branding panel */}
        <div className="hidden md:flex md:w-1/2 flex-col justify-between p-8 bg-gradient-to-br from-primary to-red-700  text-white relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="JP Research Logo"
                className="h-32 w-40 object-contain rounded-xl bg-white/10 p-2 backdrop-blur-md shadow-lg"
              />
            </div>

            <h1 className="text-3xl font-semibold mb-3">
              Welcome back, Admin.
            </h1>
            <p className="text-sm text-white/80 mb-6">
              Securely manage news, publications, projects, careers and contact
              messages from one powerful dashboard.
            </p>

            <ul className="space-y-2 text-xs text-white/85">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Real-time content updates on the website
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Centralized management for JPRI pages
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Designed for internal teams & stakeholders
              </li>
            </ul>
          </div>

          <div className="relative z-10 mt-8 text-[10px] text-white/75">
            Secured access • {new Date().getFullYear()}
          </div>
        </div>

        {/* right / form panel */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-white">
          <h2 className="text-2xl font-semibold mb-1">Admin Login</h2>
          <p className="text-xs text-slate-400 mb-6">
            Use your admin credentials to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-medium text-black">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-white border border-slate-700 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70 placeholder:text-slate-500"
                  placeholder="admin@jpresearch.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-black">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-white border border-slate-700 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70 placeholder:text-slate-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-xs text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400 bg-red-500/5 border border-red-500/40 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-red-700 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-900/40 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {loading && (
                <span className="h-3 w-3 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
              )}
              <span>{loading ? "Logging in..." : "Login to Dashboard"}</span>
            </button>

            <p className="text-[10px] text-slate-500 text-center mt-2">
              This portal is authorized for JP Research employees only.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
