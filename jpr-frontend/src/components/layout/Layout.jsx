// src/components/layout/Layout.jsx
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Sidebar + mobile header */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        <main
          className="
            flex-1
            pt-16              /* space for mobile header */
            md:pt-0 md:pl-20   /* space for desktop sidebar */
            transition-all
          "
        >
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
