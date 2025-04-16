
import { Button } from "@/components/ui/button";
import { ChevronLeft, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const StoryHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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

  return (
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
  );
};
