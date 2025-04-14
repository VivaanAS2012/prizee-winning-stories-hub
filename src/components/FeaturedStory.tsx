
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Calendar } from "lucide-react";
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
      className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 mb-12"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.3 }}
        className="absolute inset-0 bg-black backdrop-blur-sm"
      />
      <motion.div 
        className="relative z-10 h-full flex flex-col justify-end p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 text-blue-400 mb-4"
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-semibold">BREAKING NEWS</span>
          <span className="flex items-center gap-1 text-sm ml-4">
            <Calendar className="w-4 h-4" />
            April 14, 2025
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          The Future of Technology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed"
        >
          Breaking: AI systems achieve unprecedented breakthroughs in quantum computing. 
          Industry experts predict revolutionary changes in technology landscape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={handleReadMore}
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 w-fit"
          >
            Read Full Story <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
