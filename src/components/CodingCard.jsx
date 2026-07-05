import { memo } from 'react';
import { ChevronDown, Lightbulb, Bookmark, Terminal, AlertTriangle, FastForward, CheckCircle2, Share } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import CodeBlock from './CodeBlock';
import '../index.css';

const CodingCard = memo(function CodingCard({ data, topicId, index }) {
  const setOpenQuestion = useStore((state) => state.setOpenQuestion);
  const toggleBookmark = useStore((state) => state.toggleBookmark);
  const toggleCompleted = useStore((state) => state.toggleCompleted);
  const setToast = useStore((state) => state.setToast);

  // Highly optimized selectors (prevents global re-renders)
  const isOpen = useStore((state) => state.openQuestions[topicId] === data.id);
  const isBookmarked = useStore((state) => state.bookmarks.includes(data.id));
  const isCompleted = useStore((state) => state.completed.includes(data.id));

  const handleShare = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/${topicId}#${data.id}`);
    setToast('Link copied to clipboard!');
  };

  const getDifficultyColor = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy': return '#A3E635'; // green
      case 'medium': return '#FACC15'; // yellow
      case 'hard': return '#F87171'; // red
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <div className={`q-card ${isOpen ? 'open' : ''}`} id={data.id}>
      <button 
        className="q-header" 
        onClick={() => setOpenQuestion(topicId, data.id)}
        aria-expanded={isOpen}
      >
        <div className="q-header-content">
          <div className="q-header-meta">
            <span 
              className="badge" 
              style={{ 
                backgroundColor: getDifficultyColor(data.difficulty), 
                color: '#000' 
              }}
            >
              {data.difficulty || 'Medium'}
            </span>
            {data.topics && data.topics.map(t => (
              <span key={t} className="badge" style={{ backgroundColor: 'var(--bg-hover)', color: 'var(--text-secondary)' }}>
                {t}
              </span>
            ))}
          </div>
          <div className="q-title">
            <span className="q-number">Q{index + 1}.</span>
            <span>{data.title}</span>
          </div>
        </div>
        <motion.div 
          className="q-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }}
            className="q-body-wrapper"
          >
            <div className="q-body">
              
              {/* Problem Statement */}
              <div className="coding-section">
                <h4>Problem Statement</h4>
                <p>{data.problemStatement}</p>
              </div>

              {/* Examples */}
              {data.examples && data.examples.length > 0 && (
                <div className="coding-section">
                  <h4>Examples</h4>
                  {data.examples.map((ex, i) => (
                    <div key={i} className="example-box">
                      <div><strong>Input:</strong> <code>{ex.input}</code></div>
                      <div><strong>Output:</strong> <code>{ex.output}</code></div>
                      {ex.explanation && <div><strong>Explanation:</strong> {ex.explanation}</div>}
                    </div>
                  ))}
                </div>
              )}

              {/* Constraints */}
              {data.constraints && data.constraints.length > 0 && (
                <div className="coding-section">
                  <h4>Constraints</h4>
                  <ul className="constraints-list">
                    {data.constraints.map((c, i) => <li key={i}><code>{c}</code></li>)}
                  </ul>
                </div>
              )}

              {/* Approach & Complexity */}
              <div className="coding-section">
                <h4><Lightbulb size={16} /> Solution Approach</h4>
                <p>{data.approach}</p>
                <div className="complexity-box">
                  <span><strong>Time:</strong> {data.timeComplexity}</span>
                  <span><strong>Space:</strong> {data.spaceComplexity}</span>
                </div>
              </div>

              {/* Solution Code */}
              {data.solution && (
                <div className="coding-section">
                  <h4><Terminal size={16} /> Basic Solution</h4>
                  <CodeBlock code={data.solution} />
                </div>
              )}

              {/* Optimized Code */}
              {data.optimizedSolution && data.optimizedSolution !== data.solution && (
                <div className="coding-section">
                  <h4><FastForward size={16} /> Optimized Solution</h4>
                  <CodeBlock code={data.optimizedSolution} />
                </div>
              )}

              {/* Common Mistakes */}
              {data.commonMistakes && data.commonMistakes.length > 0 && (
                <div className="coding-section">
                  <h4><AlertTriangle size={16} /> Common Mistakes</h4>
                  <ul className="mistakes-list">
                    {data.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="card-actions">
                <button 
                  className={`btn ${isCompleted ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={(e) => { e.stopPropagation(); toggleCompleted(data.id); }}
                >
                  <CheckCircle2 size={16} /> {isCompleted ? 'Completed' : 'Mark Complete'}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={(e) => { e.stopPropagation(); toggleBookmark(data.id); }}
                >
                  <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                  {isBookmarked ? 'Saved' : 'Save'}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleShare}
                >
                  <Share size={16} /> Share
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default CodingCard;
