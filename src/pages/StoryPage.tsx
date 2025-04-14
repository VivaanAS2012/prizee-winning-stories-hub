
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, User } from 'lucide-react';

const stories = {
  'future-of-technology': {
    title: 'The Future of Technology',
    author: 'Alex Thompson',
    date: '2025-04-14',
    comments: 156,
    content: [
      {
        type: 'paragraph',
        text: 'Artificial Intelligence is revolutionizing every aspect of our lives. From how we work to how we live, AI is making processes more efficient and creating new possibilities we never thought possible.'
      },
      {
        type: 'paragraph',
        text: 'As we move forward, the integration of AI in our daily lives will only deepen, bringing both exciting opportunities and important challenges we need to address.'
      },
      {
        type: 'quote',
        text: 'The future is already here – it\'s just not evenly distributed.',
        author: 'William Gibson'
      },
      {
        type: 'paragraph',
        text: 'The next decade will see unprecedented advances in quantum computing, biotechnology, and renewable energy. These developments will reshape industries and create new paradigms for how we live and work.'
      }
    ]
  },
  'web-development-2025': {
    title: 'Web Development Trends 2025',
    author: 'Sarah Chen',
    date: '2025-04-13',
    comments: 89,
    content: [
      {
        type: 'paragraph',
        text: 'The landscape of web development continues to evolve at a rapid pace. New frameworks and tools are emerging to address the growing complexity of modern web applications.'
      },
      {
        type: 'quote',
        text: 'Simplicity is the ultimate sophistication.',
        author: 'Leonardo da Vinci'
      },
      {
        type: 'paragraph',
        text: 'AI-driven development tools, WebAssembly, and edge computing are becoming mainstream, enabling developers to build faster and more sophisticated applications.'
      }
    ]
  }
};

const StoryPage = () => {
  const { slug } = useParams();
  const story = slug ? stories[slug as keyof typeof stories] : null;

  if (!story) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-background text-white p-6"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Story not found</h1>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-white p-6"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          {story.title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-6 text-gray-400 mb-8"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{story.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{story.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>{story.comments} comments</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          {story.content.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {section.type === 'paragraph' ? (
                <p className="text-lg text-gray-200">{section.text}</p>
              ) : section.type === 'quote' ? (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-300">
                  <p>{section.text}</p>
                  <footer className="mt-2 text-sm text-gray-400">— {section.author}</footer>
                </blockquote>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StoryPage;
