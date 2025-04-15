
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

  return (
    <div className="mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-8"
      >
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-white">Trending Topics</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => {
          const IconComponent = topic.icon || TrendingUp;
          return (
            <motion.button
              key={topic.title}
              onClick={() => handleTopicClick(topic.slug)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              className="bg-card-hover rounded-xl p-6 cursor-pointer transition-colors text-left w-full border border-blue-500/20"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <IconComponent className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{topic.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{topic.count} discussions</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{topic.readers} readers</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400 mt-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">Trending now</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
