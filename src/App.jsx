import { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import TopicPage from './components/TopicPage';
import Toast from './components/Toast';
import { useStore } from './store/useStore';

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const theme = useStore((state) => state.theme);

  return (
    <Router>
      <div className="app-layout" data-theme={theme}>
        <Sidebar 
          isMobileOpen={isMobileOpen} 
          closeMobileSidebar={() => setIsMobileOpen(false)} 
        />
        
        <div className="main-wrapper">
          <TopNav toggleMobileSidebar={() => setIsMobileOpen(!isMobileOpen)} />
          
          <div className="page-scroll">
            <Suspense fallback={<div style={{ padding: '40px', color: 'var(--text-secondary)' }}>Loading content...</div>}>
              <Routes>
                <Route path="/" element={<Navigate to="/javascript" replace />} />
                <Route path="/:topicId" element={<TopicPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <Toast />
      </div>
    </Router>
  );
}

export default App;
