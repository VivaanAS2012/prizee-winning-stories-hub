
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StoryHeader } from '@/components/story/StoryHeader';
import { StoryMeta } from '@/components/story/StoryMeta';
import { RelatedStories } from '@/components/story/RelatedStories';
import { stories } from '@/types/story';

const StoryPage = () => {
  const { slug } = useParams();
  const story = slug ? stories[slug] : null;

  if (!story) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-background text-white p-6"
      >
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Story Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The story you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-white pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <StoryHeader />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <StoryMeta story={story} />

          <div className="space-y-8">
            {story.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {section.type === 'paragraph' ? (
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {section.text}
                  </p>
                ) : section.type === 'quote' ? (
                  <blockquote className="relative border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-500/5 rounded-r-lg">
                    <div className="absolute -left-3 top-0 h-6 w-6 bg-blue-500/20 rounded-full" />
                    <p className="italic text-lg text-gray-300">{section.text}</p>
                    {section.author && (
                      <footer className="mt-2 text-sm text-blue-400">— {section.author}</footer>
                    )}
                  </blockquote>
                ) : null}
              </motion.div>
            ))}
          </div>

          {story.relatedStories && story.relatedStories.length > 0 && (
            <RelatedStories stories={story.relatedStories} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryPage;
