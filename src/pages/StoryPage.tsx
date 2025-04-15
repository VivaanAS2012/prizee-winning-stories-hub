
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, User, ChevronLeft, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

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
  const navigate = useNavigate();
  const { toast } = useToast();
  const story = slug ? stories[slug as keyof typeof stories] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The story link has been copied to your clipboard",
    });
  };

  const handleBookmark = () => {
    toast({
      title: "Story bookmarked!",
      description: "This story has been added to your bookmarks",
    });
  };

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-white pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="py-6 mb-8 sticky top-0 bg-background/80 backdrop-blur-lg z-10"
        >
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-blue-500/10"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              {story.title}
            </h1>
            
            <Card className="bg-card-hover/50 border border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-6 text-gray-400">
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
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={handleShare} className="hover:bg-blue-500/10">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleBookmark} className="hover:bg-blue-500/10">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {story.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {section.type === 'paragraph' ? (
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {section.text}
                  </p>
                ) : section.type === 'quote' ? (
                  <blockquote className="relative border-l-4 border-blue-500 pl-6 italic text-lg text-gray-300">
                    <div className="absolute -left-3 top-0 h-6 w-6 bg-blue-500/20 rounded-full" />
                    <p>{section.text}</p>
                    <footer className="mt-2 text-sm text-blue-400">— {section.author}</footer>
                  </blockquote>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryPage;
