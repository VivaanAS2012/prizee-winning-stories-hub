import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, User, ChevronLeft, Share2, Bookmark, Trophy, Timer, ArrowRight } from 'lucide-react';
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
  },
  'nba-playoffs': {
    title: '2025 NBA Playoffs: Historic Showdowns and Game-Changing Moments',
    author: 'Michael Jordan',
    date: '2025-04-16',
    comments: 324,
    readTime: '8 min',
    category: 'Sports',
    content: [
      {
        type: 'paragraph',
        text: 'The 2025 NBA Playoffs have delivered some of the most thrilling basketball moments in recent history. With emerging stars and seasoned veterans clashing on the court, every game has been a masterclass in athletic excellence.'
      },
      {
        type: 'quote',
        text: 'This might be the most competitive playoffs series we\'ve seen in the last decade.',
        author: 'LeBron James'
      },
      {
        type: 'paragraph',
        text: 'The Eastern Conference finals have particularly stood out, featuring unprecedented scoring records and last-second victories that have kept fans on the edge of their seats.'
      },
      {
        type: 'paragraph',
        text: 'As we head into the final stages of the playoffs, the level of play continues to elevate, promising more unforgettable moments in basketball history.'
      }
    ],
    relatedStories: [
      { title: 'Rising Stars of the NBA', slug: 'rising-stars' },
      { title: 'Evolution of Basketball Strategy', slug: 'basketball-strategy' },
      { title: 'Legacy of Championships', slug: 'championship-legacy' }
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
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Story Not Found</h1>
          <p className="text-gray-400 mb-8">The story you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
            Return Home
          </Button>
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
          className="py-6 mb-8 sticky top-0 bg-background/80 backdrop-blur-lg z-10 border-b border-white/10"
        >
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="hover:bg-blue-500/10 group"
            >
              <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={handleShare} className="hover:bg-blue-500/10 hover:scale-105 transition-all">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleBookmark} className="hover:bg-blue-500/10 hover:scale-105 transition-all">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium">{story.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              {story.title}
            </h1>
            
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{story.author}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-purple-400" />
                    <span>{story.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <span>{story.comments} comments</span>
                  </div>
                </div>
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
                  <blockquote className="relative border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-500/5 rounded-r-lg">
                    <div className="absolute -left-3 top-0 h-6 w-6 bg-blue-500/20 rounded-full" />
                    <p className="italic text-lg text-gray-300">{section.text}</p>
                    <footer className="mt-2 text-sm text-blue-400">— {section.author}</footer>
                  </blockquote>
                ) : null}
              </motion.div>
            ))}
          </div>

          {story.relatedStories && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gradient-to-r from-white to-gray-400">Related Stories</h2>
              <div className="grid gap-4">
                {story.relatedStories.map((related, index) => (
                  <motion.button
                    key={index}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    onClick={() => navigate(`/story/${related.slug}`)}
                    className="group p-4 bg-card-hover/30 rounded-lg border border-white/10 text-left transition-all hover:bg-blue-900/20 hover:border-blue-500/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200 group-hover:text-white transition-colors">{related.title}</span>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryPage;
