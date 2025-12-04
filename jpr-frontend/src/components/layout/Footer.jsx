import footerDesign from "../../assets/images/home/footer_design.png";
import footerLogo from "../../assets/logos/footer_logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-1 pb-0">
      {/* Top Content Row */}
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col items-center gap-3
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start ml-12">
          <img src={footerLogo} alt="JPRI Logo" className="w-28" />
        </div>

        {/* Navigation Links */}
        <nav
          className="
            flex flex-wrap justify-center md:justify-end
            gap-x-6 gap-y-2 text-sm font-medium
          "
        >
          {[
            ["About Us", "/"],
            ["Services", "/"],
            ["Publications", "/"],
            ["News & Events", "/"],
            ["Projects", "/"],
            ["Employee Login", "/"],
            ["Contact Us", "/"],
            ["Privacy Policy", "/"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="hover:underline hover:text-white/90 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 text-xs opacity-90">
        Copyrights © JPRI 2025
      </div>

      {/* BOTTOM STRIP — REDUCED HEIGHT */}
      <div
        className="
          w-full h-[60px]
          bg-repeat-x bg-bottom
          pointer-events-none select-none
        "
        style={{
          backgroundImage: `url(${footerDesign})`,
          backgroundSize: "auto 55%",
          margin: 0,
          padding: 0,
          lineHeight: 0,
        }}
      />
    </footer>
  );
}
