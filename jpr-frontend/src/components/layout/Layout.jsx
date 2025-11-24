import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Sidebar on top of everything */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
       <main className="flex-1 pl-20">
          {/* pl-28 ≈ sidebar width (24) + a bit of breathing room */}
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
