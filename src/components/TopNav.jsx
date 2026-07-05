import { Search, Menu } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function TopNav({ toggleMobileSidebar }) {
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  return (
    <header className="top-nav">
      <div className="top-nav-left">
        <button 
          className="btn-icon mobile-menu-toggle" 
          onClick={toggleMobileSidebar}
          id="mobile-menu-toggle"
          aria-label="Open Sidebar"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
        <h3 className="nav-title">Pied Prep</h3>
      </div>
      
      <div className="global-search">
        <Search className="global-search-icon" size={16} />
        <input 
          type="text" 
          placeholder="Search questions, answers, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
}
