import { X, Bookmark, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { contentData } from '../data/content';
import '../index.css';

export default function BookmarksDrawer() {
  const isBookmarksOpen = useStore((state) => state.isBookmarksOpen);
  const setIsBookmarksOpen = useStore((state) => state.setIsBookmarksOpen);
  const bookmarks = useStore((state) => state.bookmarks);
  const setOpenQuestion = useStore((state) => state.setOpenQuestion);
  const navigate = useNavigate();

  // Group bookmarks by domain
  const groupedBookmarks = bookmarks.reduce((acc, questionId) => {
    // Find the domain that owns this question
    for (const [domainId, domainData] of Object.entries(contentData)) {
      const q = domainData.questions?.find(q => q.id === questionId);
      if (q) {
        if (!acc[domainId]) acc[domainId] = { title: domainData.title, questions: [] };
        acc[domainId].questions.push(q);
        break;
      }
    }
    return acc;
  }, {});

  const handleBookmarkClick = (domainId, questionId) => {
    // Navigate to topic
    navigate(`/${domainId}`);
    // Open accordion
    setOpenQuestion(domainId, questionId);
    // Close drawer
    setIsBookmarksOpen(false);
  };

  return (
    <AnimatePresence>
      {isBookmarksOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBookmarksOpen(false)}
          />

          {/* Drawer Panel */}
          <motion.div 
            className="bookmarks-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bookmark size={20} />
                <h2 style={{ fontSize: '18px', margin: 0, fontWeight: 600 }}>Bookmarks</h2>
              </div>
              <button 
                className="btn-icon" 
                onClick={() => setIsBookmarksOpen(false)}
                aria-label="Close Bookmarks"
              >
                <X size={20} />
              </button>
            </div>

            <div className="drawer-content">
              {bookmarks.length === 0 ? (
                <div className="empty-state">
                  <Bookmark size={32} style={{ opacity: 0.2, marginBottom: '16px' }} />
                  <p>You haven't bookmarked any questions yet.</p>
                </div>
              ) : (
                Object.entries(groupedBookmarks).map(([domainId, data]) => (
                  <div key={domainId} className="bookmark-group">
                    <h3 className="bookmark-domain-title">{data.title}</h3>
                    <div className="bookmark-list">
                      {data.questions.map(q => (
                        <button 
                          key={q.id}
                          className="bookmark-item"
                          onClick={() => handleBookmarkClick(domainId, q.id)}
                        >
                          <span className="bookmark-q-title">{q.question}</span>
                          <ExternalLink size={14} className="bookmark-icon" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
