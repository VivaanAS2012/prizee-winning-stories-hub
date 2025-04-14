
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const FeaturedStory = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/story/future-of-technology');
    console.log('Navigating to story...');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 mb-12"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="flex items-center gap-2 text-blue-400 mb-4">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-semibold">TRENDING NOW</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          The Future of Technology
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">
          Discover how AI is revolutionizing the tech industry and shaping our future.
        </p>
        <Button
          onClick={handleReadMore}
          variant="default"
          className="bg-blue-500 hover:bg-blue-600 transition-colors w-fit"
        >
          Read More <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
};
