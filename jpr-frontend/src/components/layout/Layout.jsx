// src/components/layout/Layout.jsx
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Fixed header */}
      <HeaderTop />

      {/* Main content */}
      <main className="flex-1 mt-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
