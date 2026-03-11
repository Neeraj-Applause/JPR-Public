// src/components/layout/Layout.jsx
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import GoogleTranslate from "../common/GoogleTranslate";

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Fixed header */}
      <HeaderTop />

      {/* Main content */}
      <main className="flex-1 mt-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Google Translate Floating Button */}
      <GoogleTranslate />
    </div>
  );
};

export default Layout;
