
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

const topics = [
  { title: "Technology", count: "2.4k", slug: "technology" },
  { title: "Gaming", count: "1.8k", slug: "gaming" },
  { title: "Sports", count: "1.5k", slug: "sports" },
  { title: "Business", count: "1.2k", slug: "business" },
  { title: "Entertainment", count: "1k", slug: "entertainment" },
];

export const TrendingTopics = () => {
  const navigate = useNavigate();

  const handleTopicClick = (slug: string) => {
    navigate(`/topic/${slug}`);
    console.log(`Navigating to topic: ${slug}`);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-white">Trending Topics</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <motion.button
            key={topic.title}
            onClick={() => handleTopicClick(topic.slug)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-card-hover rounded-xl p-6 cursor-pointer hover:bg-blue-900/20 transition-colors text-left w-full"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
            <p className="text-blue-400">{topic.count} discussions</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
