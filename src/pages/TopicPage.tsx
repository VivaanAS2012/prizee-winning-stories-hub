
import { useParams } from 'react-router-dom';

const topics = {
  technology: {
    title: 'Technology',
    posts: [
      { id: 1, title: 'The Future of AI', comments: 156 },
      { id: 2, title: 'Web Development Trends 2025', comments: 89 },
      { id: 3, title: 'Machine Learning Basics', comments: 234 }
    ]
  },
  gaming: {
    title: 'Gaming',
    posts: [
      { id: 1, title: 'Next-Gen Console Review', comments: 321 },
      { id: 2, title: 'Top Mobile Games 2025', comments: 145 },
      { id: 3, title: 'Esports Tournament Results', comments: 267 }
    ]
  }
};

const TopicPage = () => {
  const { slug } = useParams();
  const topic = slug ? topics[slug as keyof typeof topics] : null;

  if (!topic) {
    return (
      <div className="min-h-screen bg-background text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Topic not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{topic.title}</h1>
        <div className="space-y-4">
          {topic.posts.map(post => (
            <div key={post.id} className="bg-card-hover rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-blue-400">{post.comments} comments</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
