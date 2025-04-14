import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const topics = {
  technology: {
    title: 'Technology',
    description: 'Explore the latest developments in technology, from AI and quantum computing to renewable energy and space exploration.',
    posts: [
      { id: 1, title: 'The Future of AI', comments: 156, slug: 'future-of-technology', date: '2025-04-14', readTime: '5 min' },
      { id: 2, title: 'Web Development Trends 2025', comments: 89, slug: 'web-development-2025', date: '2025-04-13', readTime: '4 min' },
      { id: 3, title: 'Machine Learning Basics', comments: 234, slug: 'machine-learning-basics', date: '2025-04-12', readTime: '7 min' },
      { id: 4, title: 'Quantum Computing Revolution', comments: 178, slug: 'quantum-computing', date: '2025-04-11', readTime: '6 min' },
      { id: 5, title: 'The Rise of Edge Computing', comments: 145, slug: 'edge-computing', date: '2025-04-10', readTime: '5 min' }
    ]
  },
  gaming: {
    title: 'Gaming',
    description: 'Stay updated with the latest gaming news, reviews, and esports coverage from around the world.',
    posts: [
      { id: 1, title: 'Next-Gen Console Review', comments: 321, slug: 'next-gen-console', date: '2025-04-14', readTime: '8 min' },
      { id: 2, title: 'Top Mobile Games 2025', comments: 145, slug: 'mobile-games-2025', date: '2025-04-13', readTime: '5 min' },
      { id: 3, title: 'Esports Tournament Results', comments: 267, slug: 'esports-results', date: '2025-04-12', readTime: '6 min' },
      { id: 4, title: 'Virtual Reality Gaming Guide', comments: 198, slug: 'vr-gaming', date: '2025-04-11', readTime: '7 min' },
      { id: 5, title: 'Cloud Gaming Platforms', comments: 156, slug: 'cloud-gaming', date: '2025-04-10', readTime: '4 min' }
    ]
  },
  sports: {
    title: 'Sports',
    description: 'Stay up to date with the latest sports news, scores, and analysis from around the world.',
    posts: [
      { id: 1, title: 'Champions League Final Preview', comments: 458, slug: 'champions-league-final', date: '2025-04-14', readTime: '6 min' },
      { id: 2, title: 'NBA Playoffs Update', comments: 312, slug: 'nba-playoffs', date: '2025-04-13', readTime: '4 min' },
      { id: 3, title: 'Formula 1 Race Results', comments: 245, slug: 'f1-results', date: '2025-04-12', readTime: '5 min' },
      { id: 4, title: 'Tennis Grand Slam Coverage', comments: 189, slug: 'tennis-grandslam', date: '2025-04-11', readTime: '7 min' },
      { id: 5, title: 'Olympic Games Preparation', comments: 276, slug: 'olympic-prep', date: '2025-04-10', readTime: '8 min' }
    ]
  },
  entertainment: {
    title: 'Entertainment',
    description: 'Your source for the latest movie releases, TV shows, celebrity news, and pop culture updates.',
    posts: [
      { id: 1, title: 'Summer Blockbuster Preview', comments: 367, slug: 'summer-movies', date: '2025-04-14', readTime: '5 min' },
      { id: 2, title: 'Streaming Platform Updates', comments: 289, slug: 'streaming-news', date: '2025-04-13', readTime: '4 min' },
      { id: 3, title: 'Award Show Highlights', comments: 412, slug: 'award-shows', date: '2025-04-12', readTime: '6 min' },
      { id: 4, title: 'Celebrity Interviews', comments: 234, slug: 'celebrity-news', date: '2025-04-11', readTime: '5 min' },
      { id: 5, title: 'Music Festival Coverage', comments: 198, slug: 'music-festivals', date: '2025-04-10', readTime: '7 min' }
    ]
  },
  business: {
    title: 'Business',
    description: 'Breaking business news, market analysis, and insights into global economic trends.',
    posts: [
      { id: 1, title: 'Stock Market Analysis', comments: 287, slug: 'stock-market', date: '2025-04-14', readTime: '6 min' },
      { id: 2, title: 'Tech Startup Funding', comments: 198, slug: 'startup-funding', date: '2025-04-13', readTime: '5 min' },
      { id: 3, title: 'Global Economic Trends', comments: 345, slug: 'economic-trends', date: '2025-04-12', readTime: '7 min' },
      { id: 4, title: 'Cryptocurrency Updates', comments: 276, slug: 'crypto-news', date: '2025-04-11', readTime: '4 min' },
      { id: 5, title: 'Industry Leadership Changes', comments: 167, slug: 'industry-leaders', date: '2025-04-10', readTime: '5 min' }
    ]
  }
};

const TopicPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const topic = slug ? topics[slug as keyof typeof topics] : null;

  const handlePostClick = (postSlug: string) => {
    navigate(`/story/${postSlug}`);
  };

  if (!topic) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-background text-white p-6"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Topic not found</h1>
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/20"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {topic.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">{topic.description}</p>
        </motion.div>

        <div className="space-y-4">
          {topic.posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => handlePostClick(post.slug)}
              className="bg-card-hover rounded-xl p-6 cursor-pointer hover:bg-blue-900/20 transition-all duration-300 group border border-blue-500/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1 duration-300" />
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TopicPage;
