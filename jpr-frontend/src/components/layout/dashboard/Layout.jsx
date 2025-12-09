import { useState } from 'react';
import Sidebar from './Sidebar';
import HeaderTop from './HeaderTop';
import { Outlet } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './dashboard.css';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <div className="sidebar-wrapper" style={{ width: isCollapsed ? '80px' : '256px' }}>
        <aside className="dashboard-sidebar">
          <Sidebar isCollapsed={isCollapsed} />
        </aside>
        
        {/* Toggle Button - positioned to overlap both sidebar and main */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary transition-all shadow-xl hover:scale-110"
          style={{ zIndex: 9999 }}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <HeaderTop />
        </header>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
