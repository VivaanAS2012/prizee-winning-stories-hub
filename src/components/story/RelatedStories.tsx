
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { RelatedStory } from "@/types/story";

interface RelatedStoriesProps {
  stories: RelatedStory[];
}

export const RelatedStories = ({ stories }: RelatedStoriesProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-16 pt-8 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gradient-to-r from-white to-gray-400">Related Stories</h2>
      <div className="grid gap-4">
        {stories.map((related, index) => (
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
  );
};
