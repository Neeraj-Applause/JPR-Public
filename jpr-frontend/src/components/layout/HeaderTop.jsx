import JPLogo from "../../assets/logos/logo.png";
import RassiLogo from "../../assets/logos/rassi.png";

export default function HeaderTop() {
  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      bg-white shadow-md
      flex items-center justify-between
      px-6 py-2
      h-20
      hidden md:flex
    ">
      {/* Left Logo */}
      <img
        src={JPLogo}
        alt="JP Research India Pvt Ltd"
        className="h-16 w-auto object-contain"
      />

      {/* Right Logo */}
      <img
        src={RassiLogo}
        alt="RASSI"
        className="h-12 w-auto object-contain"
      />
    </header>
  );
}
