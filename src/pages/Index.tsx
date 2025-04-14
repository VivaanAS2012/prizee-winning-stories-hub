
import { motion } from "framer-motion";
import { FeaturedStory } from "@/components/FeaturedStory";
import { TrendingTopics } from "@/components/TrendingTopics";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-white p-6"
    >
      <div className="max-w-7xl mx-auto">
        <FeaturedStory />
        <TrendingTopics />
      </div>
    </motion.div>
  );
};

export default Index;
