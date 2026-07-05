import { NavLink } from 'react-router-dom';
import { Layout, Palette, Code, Box, Server, Truck, Database, Key, Braces, Layers, GitBranch } from 'lucide-react';

const mainNavItems = [
  { id: 'html', label: 'HTML', icon: Layout },
  { id: 'css', label: 'CSS', icon: Palette },
  { id: 'javascript', label: 'JavaScript', icon: Code },
  { id: 'react', label: 'React', icon: Box },
  { id: 'node', label: 'Node', icon: Server },
  { id: 'express', label: 'Express', icon: Truck },
  { id: 'mongodb', label: 'MongoDB', icon: Database },
  { id: 'auth', label: 'Authentication', icon: Key },
  { id: 'git', label: 'Git & GitHub', icon: GitBranch },
];

const codingNavItems = [
  { id: 'coding-javascript', label: 'JavaScript (30)', icon: Braces },
  { id: 'coding-react', label: 'React (20)', icon: Layers },
  { id: 'coding-backend', label: 'Backend (20)', icon: Server },
  { id: 'coding-dsa', label: 'DSA (25)', icon: Code },
  { id: 'coding-mongodb', label: 'MongoDB (15)', icon: Database },
];

export default function Sidebar({ isMobileOpen, closeMobileSidebar }) {
  return (
    <>
      <div className={`mobile-overlay ${isMobileOpen ? 'open' : ''}`} onClick={closeMobileSidebar} />
      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <h3 className="nav-title" style={{ display: 'block', margin: 0 }}>Pied Prep</h3>
        </div>
        <div className="sidebar-content">
          <div style={{ padding: '8px 12px', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '8px' }}>CORE CONCEPTS</div>
          {mainNavItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={`/${item.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileSidebar}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
          
          {/* Coding Section */}
          <div className="nav-section-title">
            CODING PROBLEMS
          </div>
          {codingNavItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={`/${item.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileSidebar}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </aside>
    </>
  );
}
