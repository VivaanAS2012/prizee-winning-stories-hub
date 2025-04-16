
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Timer, Trophy, User } from "lucide-react";
import { motion } from "framer-motion";
import { Story } from "@/types/story";

interface StoryMetaProps {
  story: Story;
}

export const StoryMeta = ({ story }: StoryMetaProps) => {
  return (
    <div className="space-y-4">
      {story.category && (
        <div className="flex items-center gap-2 text-blue-400">
          <Trophy className="w-5 h-5" />
          <span className="text-sm font-medium">{story.category}</span>
        </div>
      )}
      
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
            {story.readTime && (
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-purple-400" />
                <span>{story.readTime}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>{story.comments} comments</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
