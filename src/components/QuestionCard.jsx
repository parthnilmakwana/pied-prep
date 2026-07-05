import { ChevronDown, Lightbulb, Bookmark, CheckCircle2, Share, Terminal, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import CodeBlock from './CodeBlock';

export default function QuestionCard({ data, index, topicId, topicLabel, difficulty, isOpen, onToggle }) {
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  
  // Zustand State
  const isBookmarked = useStore(state => state.bookmarks.includes(data.id));
  const toggleBookmark = useStore(state => state.toggleBookmark);
  const isCompleted = useStore(state => state.completed.includes(data.id));
  const toggleCompleted = useStore(state => state.toggleCompleted);
  const setToast = useStore(state => state.setToast);

  const handleShare = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/${topicId}#${data.id}`);
    setToast('Link copied to clipboard!');
  };

  return (
    <div className="q-card" id={data.id}>
      <button 
        className="q-header" 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="q-header-content">
          <div className="q-header-meta">
            <span className={`badge badge-topic`} style={{ 
              backgroundColor: `var(--topic-${topicId})`, 
              color: '#FFF' 
            }}>
              {topicLabel}
            </span>
            <span className={`badge badge-${difficulty}`}>{capitalize(difficulty)}</span>
            {isCompleted && (
              <span className="badge" style={{ backgroundColor: 'var(--color-success)', color: '#000' }}>
                <CheckCircle2 size={12} style={{ marginRight: '4px' }}/> Done
              </span>
            )}
          </div>
          <div className="q-title">
            <span className="q-number">Q{index + 1}.</span>
            <span>{data.question}</span>
          </div>
        </div>
        <div className="q-icon-wrap">
          {isBookmarked && <Bookmark size={18} color="var(--text-primary)" fill="var(--text-primary)" />}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="q-chevron" size={24} />
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="q-body">
              <div className="q-body-content">
                
                {/* Answer Sections */}
                <div className="answer-section">
                  {data.answer.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                {/* Story / Interview Tip */}
                {data.story && (
                  <div className="callout">
                    <div className="callout-title">
                      <Lightbulb size={18} />
                      {data.story.title}
                    </div>
                    <p>{data.story.text}</p>
                  </div>
                )}
                
                {/* Code Block */}
                {data.code && (
                  <CodeBlock code={data.code} />
                )}

                {/* Output Terminal */}
                {data.output && (
                  <div className="output-terminal">
                    <div className="output-header">
                      <Terminal size={14} /> Output
                    </div>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                      {data.output}
                    </pre>
                  </div>
                )}

                {/* Output Explanation */}
                {data.outputExplanation && (
                  <div className="explanation-box">
                    <div className="explanation-title">
                      <Info size={18} />
                      Under the Hood
                    </div>
                    <p>{data.outputExplanation}</p>
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
                    <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} /> 
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
