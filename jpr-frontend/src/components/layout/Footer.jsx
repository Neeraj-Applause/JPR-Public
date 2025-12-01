import footerDesign from "../../assets/images/home/footer_design.png";
import footerLogo from "../../assets/logos/footer_logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-8 pb-0">

      {/* Top Content Row */}
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col items-center gap-6
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start ml-12">
          <img src={footerLogo} alt="JPRI Logo" className="w-32" />
        </div>

        {/* Navigation Links */}
        <nav
          className="
            flex flex-wrap justify-center md:justify-end
            gap-x-8 gap-y-3 text-sm font-medium
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
      <p className="text-center mt-4 text-sm opacity-90">
        Copyrights © JPRI 2025
      </p>

      {/* BOTTOM STRIP — NO WHITE SPACE, FULL WIDTH, SEAMLESS REPEAT */}
      <div
        className="
          w-full h-[95px]
          bg-repeat-x bg-bottom
          pointer-events-none select-none
        "
        style={{
          backgroundImage: `url(${footerDesign})`,
          backgroundSize: "auto 60%",      // image height fills container
          margin: 0,
          padding: 0,
          lineHeight: 0,
        }}
      />
    </footer>
  );
}
