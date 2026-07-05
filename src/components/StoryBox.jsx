import { Lightbulb } from 'lucide-react';

export default function StoryBox({ story }) {
  if (!story) return null;
  
  return (
    <div className="story-box">
      <Lightbulb className="story-icon" size={24} />
      <div className="story-content">
        <h4>Story Time: {story.title}</h4>
        <p>{story.text}</p>
      </div>
    </div>
  );
}
