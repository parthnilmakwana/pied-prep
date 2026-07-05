import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { contentData } from '../data/content';
import { useStore } from '../store/useStore';
import QuestionCard from './QuestionCard';
import CodingCard from './CodingCard';

export default function TopicPage() {
  const { topicId } = useParams();
  
  // Zustand Store
  const searchQuery = useStore(state => state.searchQuery);
  const completed = useStore(state => state.completed);

  const topicData = contentData[topicId];

  const filteredQuestions = useMemo(() => {
    if (!topicData) return [];
    if (!searchQuery.trim()) return topicData.questions;
    
    const lowerQuery = searchQuery.toLowerCase();
    return topicData.questions.filter(q => 
      q.question.toLowerCase().includes(lowerQuery) || 
      q.answer.toLowerCase().includes(lowerQuery)
    );
  }, [topicData, searchQuery]);

  if (!topicData) {
    return (
      <div className="page-content" style={{ textAlign: 'center', paddingTop: '120px' }}>
        <h1 className="text-hero" style={{ color: 'var(--text-muted)' }}>Coming Soon</h1>
        <p className="page-subtitle">The "{topicId}" section is currently under development.</p>
        <p style={{ color: 'var(--text-secondary)' }}>Check back later for more interview questions!</p>
      </div>
    );
  }

  // Calculate Progress
  const totalTopicQs = topicData.questions.length;
  const completedTopicQs = topicData.questions.filter(q => completed.includes(q.id)).length;
  const progressPercent = totalTopicQs === 0 ? 0 : Math.round((completedTopicQs / totalTopicQs) * 100);

  return (
    <div className="page-content">
      <header className="page-header">
        <h1 className="text-hero">{topicData.title}</h1>
        <p className="page-subtitle">{topicData.subtitle}</p>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '32px', textAlign: 'right' }}>
          {completedTopicQs} of {totalTopicQs} completed ({progressPercent}%)
        </div>
      </header>
      
      <div className="question-list" role="tablist">
        <AnimatePresence>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q, index) => {
              const originalIndex = topicData.questions.findIndex(orig => orig.id === q.id);
              const percentage = originalIndex / totalTopicQs;
              let difficulty = 'easy';
              if (percentage >= 0.3 && percentage < 0.7) difficulty = 'medium';
              else if (percentage >= 0.7) difficulty = 'hard';

              return (
                <motion.div
                  key={q.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {topicData.isCoding ? (
                    <CodingCard 
                      data={q} 
                      index={originalIndex} 
                      topicId={topicId}
                    />
                  ) : (
                    <QuestionCard 
                      data={q} 
                      index={originalIndex} 
                      topicId={topicId}
                      topicLabel={topicData.title.split(' ')[0]}
                      difficulty={difficulty}
                    />
                  )}
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '64px 0' }}
            >
              No questions found matching "{searchQuery}"
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
