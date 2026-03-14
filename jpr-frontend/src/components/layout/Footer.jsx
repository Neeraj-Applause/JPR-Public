import footerDesign from "../../assets/images/home/footer_design.png";
import footerLogo from "../../assets/logos/footer_logo.png";

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
                ["Services", "/services/crash-investigations"],
                ["Publications", "/publications"],
                ["News", "/news"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
                ["Employee Login", "/employee-login"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="text-sm font-medium text-slate-300 hover:text-white underline-offset-4 transition-all duration-200 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="mt-8 mb-6 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © 2025 JP Research India Pvt. Ltd. All rights reserved.
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