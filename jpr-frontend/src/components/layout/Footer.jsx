import footerDesign from "../../assets/images/home/footer_design.png";
import footerLogo from "../../assets/logos/footer_logo.png";

const serviceCategories = [
  { label: "Crash Investigations", href: "/services/crash-investigations" },
  { label: "Data Analytics", href: "/services/data-analytics" },
  { label: "Road Safety Engineering", href: "/services/road-safety-engineering" },
  { label: "Training", href: "/services/training" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D252A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-12 pb-6">
        {/* Top Content Row */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img 
                src={footerLogo} 
                alt="JPRI Logo" 
                className="w-32 h-auto filter brightness-110 hover:brightness-125 transition-all duration-300" 
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
              ].map(([label, link]) => (
                <div key={label} className="relative group">
                  <a
                    href={link}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 block"
                  >
                    {label}
                  </a>
                </div>
              ))}
              
              {/* Services with always-visible sub-links */}
              <div className="flex flex-col items-start relative group">
                <a
                  href="/services/crash-investigations"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 block"
                >
                  Services
                </a>
                
                {/* Sub-links - always visible */}
                <div className="mt-2 flex flex-col gap-1.5">
                  {serviceCategories.map((category) => (
                    <a
                      key={category.label}
                      href={category.href}
                      className="text-xs text-slate-400 hover:text-slate-200 transition-colors duration-200"
                    >
                      {category.label}
                    </a>
                  ))}
                </div>
              </div>

              {[
                ["Publications", "/publications"],
                ["News", "/news"],
                ["Projects", "/projects"],
                ["Contact Us", "/contact"],
                ["Employee Login", "/employee-login"],
              ].map(([label, link]) => (
                <div key={label} className="relative group">
                  <a
                    href={link}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 block"
                  >
                    {label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="mt-8 mb-6 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © 2026 JP Research India Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Strip */}
      <div
        className="w-full h-16 bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url(${footerDesign})`,
          backgroundSize: "auto 80%",
        }}
      />

    </footer>
  );
}
