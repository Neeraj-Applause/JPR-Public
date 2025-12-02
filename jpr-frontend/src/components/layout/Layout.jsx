import Sidebar from "./Sidebar";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white relative">
      
      {/* Desktop top header strip */}
      <HeaderTop />

      {/* Sidebar + mobile header */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        <main
          className="
            flex-1
             pt-8         /* space for mobile header */
                    /* space for desktop header + sidebar */
            md:pl-20           /* desktop sidebar */
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
