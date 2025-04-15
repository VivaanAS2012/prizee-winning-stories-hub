
import { motion } from "framer-motion";
import { Flame, TrendingUp, MessageCircle, Users, Briefcase, Film, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const topics = [
  { 
    title: "Technology", 
    count: "2.4k", 
    readers: "12.5k",
    description: "Latest in AI and quantum computing",
    slug: "technology",
    icon: TrendingUp
  },
  { 
    title: "Sports", 
    count: "3.1k", 
    readers: "15.2k",
    description: "Latest sports news and analysis",
    slug: "sports",
    icon: Trophy
  },
  { 
    title: "Entertainment", 
    count: "2.8k", 
    readers: "13.7k",
    description: "Movies, TV shows, and celebrity news",
    slug: "entertainment",
    icon: Film
  },
  { 
    title: "Business", 
    count: "2.2k", 
    readers: "11.3k",
    description: "Market updates and business insights",
    slug: "business",
    icon: Briefcase
  },
  { 
    title: "Gaming", 
    count: "1.8k", 
    readers: "8.3k",
    description: "Esports and next-gen consoles",
    slug: "gaming" 
  }
];

export const TrendingTopics = () => {
  const navigate = useNavigate();

  const handleTopicClick = (slug: string) => {
    navigate(`/topic/${slug}`);
    console.log(`Navigating to topic: ${slug}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-12"
    >
      <motion.div 
        variants={itemVariants}
        className="flex items-center gap-2 mb-8"
      >
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-white">Trending Topics</h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {topics.map((topic, index) => {
          const IconComponent = topic.icon || TrendingUp;
          return (
            <motion.button
              key={topic.title}
              onClick={() => handleTopicClick(topic.slug)}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-card-hover rounded-xl p-6 cursor-pointer transition-all duration-300 text-left w-full border border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{topic.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <motion.div 
                    className="flex items-center gap-2 text-blue-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{topic.count} discussions</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-purple-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{topic.readers} readers</span>
                  </motion.div>
                </div>
                <motion.div 
                  className="flex items-center gap-2 text-green-400 mt-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">Trending now</span>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
